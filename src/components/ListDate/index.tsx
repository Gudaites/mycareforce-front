import { DayData } from "../../services/available-slots";
import Button from "../Button";
import {
  DateTitle,
  DayTitle,
  ScheduleItem,
  ScheduleList,
  TitleContent,
} from "./styles";

interface ListDateProps {
  slot: DayData;
  onClick: (id: string) => void;
}

const ListDate: React.FC<ListDateProps> = ({ slot, onClick }) => {
  console.log(slot);
  return (
    <div key={slot.date}>
      <TitleContent>
        <DayTitle>{slot.dayOfWeek}</DayTitle>
        <DateTitle>{slot.date}</DateTitle>
      </TitleContent>
      <ScheduleList>
        {slot.hours.map((hour) => (
          <ScheduleItem key={hour.id}>
            {hour.startTime}h - {hour.endTime}h
            <Button
              disabled={hour.isScheduled}
              onClick={() => onClick(hour.id)}
            >
              {hour.isScheduled ? "Agendado" : "Agendar"}
            </Button>
          </ScheduleItem>
        ))}
      </ScheduleList>
    </div>
  );
};

export default ListDate;
