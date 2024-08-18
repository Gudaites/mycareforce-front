import Header from "../../components/Header";
import HealthUnitCard from "../../components/HealthUnitCard";
import { TitleContent, Title, Container, Content, ListCards } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TitleContent>
          <Title>Clinicas Disponiveis</Title>
        </TitleContent>
        <ListCards>
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
          <HealthUnitCard name="Teste 1" address="Teste 1" />
        </ListCards>
      </Content>
    </Container>
  );
};

export default Dashboard;
