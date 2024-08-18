import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HealthUnitCard from "../../components/HealthUnitCard";
import { TitleContent, Title, Container, Content, ListCards } from "./styles";
import {
  HealthUnitsService,
  IFindAllHealth,
} from "../../services/health-units";
import ModalReserveSlot from "../../components/ModalReserveSlot";
import { AvailableSlotsService, DayData } from "../../services/available-slots";

const Dashboard: React.FC = () => {
  const healthUnitsService = new HealthUnitsService();
  const availableSlotsService = new AvailableSlotsService();

  const [units, setUnits] = useState<IFindAllHealth[]>([]);
  const [slotId, setSlotId] = useState<string>();
  const [slots, setSlots] = useState<DayData[]>([]);

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
      ></ModalReserveSlot>
    </Container>
  );
};

export default Dashboard;
