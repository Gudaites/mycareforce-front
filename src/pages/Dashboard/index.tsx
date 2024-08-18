import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HealthUnitCard from "../../components/HealthUnitCard";
import { TitleContent, Title, Container, Content, ListCards } from "./styles";
import {
  HealthUnitsService,
  IFindAllHealth,
} from "../../services/health-units";

const Dashboard: React.FC = () => {
  const healthUnitsService = new HealthUnitsService();

  const [units, setUnits] = useState<IFindAllHealth[]>([]);

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
              />
            );
          })}
        </ListCards>
      </Content>
    </Container>
  );
};

export default Dashboard;
