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
  const [slotId, setSlotId] = useState<string>();
  const [slots, setSlots] = useState<DayData[]>([]);

  const handleSchedule = useCallback(
    async (id: string) => {
      try {
        await registrationService.registerInterest(id);
        toast.success("Interesse registrado com sucesso");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error("Aconteceu algum erro interno");
        }
      }
    },
    [slotId]
  );

  useEffect(() => {
    if (slotId) {
      const fetchData = async () => {
        const data =
          await availableSlotsService.getAvailableSlotsByHealthUnitId(slotId);
        setSlots(data);
      };

      fetchData();
    }
  }, [slotId]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await healthUnitsService.findAll();
      setUnits(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <TitleContent>
          <Title>Clinicas Disponiveis</Title>
        </TitleContent>
        <ListCards>
          {units?.map((item) => {
            return (
              <HealthUnitCard
                key={item.name + item.address}
                name={item.name}
                address={item.address}
                onClick={() => setSlotId(item.id)}
              />
            );
          })}
        </ListCards>
      </Content>
      <ModalReserveSlot
        isOpen={!!slotId}
        slots={slots}
        onClose={() => setSlotId(undefined)}
        onClick={handleSchedule}
      ></ModalReserveSlot>
    </Container>
  );
};

export default Dashboard;
