/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import HealthUnitCard from "../../components/HealthUnitCard";
import { TitleContent, Title, Container, Content, ListCards } from "./styles";
import {
  HealthUnitsService,
  IFindAllHealth,
} from "../../services/health-units";
import ModalReserveSlot from "../../components/ModalReserveSlot";
import { AvailableSlotsService, DayData } from "../../services/available-slots";
import { RegistrationService } from "../../services/registration";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard: React.FC = () => {
  const healthUnitsService = new HealthUnitsService();
  const availableSlotsService = new AvailableSlotsService();
  const registrationService = new RegistrationService();

  const [units, setUnits] = useState<IFindAllHealth[]>([]);
  const [slotId, setSlotId] = useState<string | null>();
  const [slots, setSlots] = useState<DayData[]>([]);
  const [isLoadingAvailableSlots, setIsLoadingAvailableSlots] =
    useState<boolean>(true);
  const [isLoadingHealthUnits, setIsLoadingHealthUnits] =
    useState<boolean>(true);

  const fetchHealthUnits = useCallback(async () => {
    const data = await healthUnitsService.findAll();
    setUnits(data);
  }, []);

  const fetchAvailableSlotsData = useCallback(
    async (slotId: string) => {
      setIsLoadingAvailableSlots(true);
      const data = await availableSlotsService.getAvailableSlotsByHealthUnitId(
        slotId
      );
      setSlots(data);
      setIsLoadingAvailableSlots(false);
    },
    [availableSlotsService]
  );

  const handleSchedule = useCallback(
    async (id: string) => {
      try {
        setIsLoadingAvailableSlots(true);
        await registrationService.registerInterest(id);
        console.log(slotId);
        if (slotId) {
          await fetchAvailableSlotsData(slotId);
        }
        toast.success("Interesse registrado com sucesso");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error("Aconteceu algum erro interno");
        }
      }
    },
    [registrationService, slotId, fetchAvailableSlotsData]
  );

  const handleCloseModal = useCallback(async () => {
    setIsLoadingAvailableSlots(true);
    setSlotId(null);
  }, []);

  useEffect(() => {
    if (slotId) {
      fetchAvailableSlotsData(slotId);
    }
  }, [slotId]);

  useEffect(() => {
    fetchHealthUnits();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <TitleContent>
          <Title>Clinicas Disponiveis</Title>
        </TitleContent>
        <ListCards>
          {units?.map((item) => (
            <HealthUnitCard
              key={item.name + item.address}
              name={item.name}
              address={item.address}
              onClick={() => setSlotId(item.id)}
            />
          ))}
        </ListCards>
      </Content>
      <ModalReserveSlot
        isOpen={!!slotId}
        slots={slots}
        onClose={handleCloseModal}
        onClick={handleSchedule}
        isLoading={isLoadingAvailableSlots}
      ></ModalReserveSlot>
    </Container>
  );
};

export default Dashboard;
