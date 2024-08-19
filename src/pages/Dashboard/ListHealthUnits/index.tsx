import HealthUnitCard from "../../../components/HealthUnitCard";
import { HealthUnit } from "../../../services/health-units";
import { ListCards, SkeletonItem } from "./styles";
import { uuidv7 } from "uuidv7";
interface ListHealthUnitsProps {
  units: HealthUnit[];
  onClick: (id: string) => void;
  isLoading: boolean;
}

const ListHealthUnits: React.FC<ListHealthUnitsProps> = ({
  units,
  onClick,
  isLoading,
}) => {
  return (
    <ListCards>
      {units?.map((item) => (
        <HealthUnitCard
          key={item.id}
          name={item.name}
          address={item.address}
          onClick={() => onClick(item.id)}
        />
      ))}
      {isLoading &&
        Array.from({ length: 10 }).map(() => <SkeletonItem key={uuidv7()} />)}
    </ListCards>
  );
};

export default ListHealthUnits;
