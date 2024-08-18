import React from "react";
import {
  Overlay,
  ModalContainer,
  TitleContent,
  DayTitle,
  ScheduleList,
  ScheduleItem,
  DateTitle,
  Title,
  ContentWrapper,
} from "./styles";
import { DayData } from "../../services/available-slots";
import Button from "../Button";

interface ModalProps {
  slots: DayData[] | [];
  isOpen: boolean;
  onClose: () => void;
}

const ModalReserveSlot: React.FC<ModalProps> = ({ isOpen, onClose, slots }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Title>
          <h1>Horarios Disponíveis</h1>
        </Title>
        <ContentWrapper>
          {slots.map((slot) => (
            <div key={slot.date}>
              <TitleContent>
                <DayTitle>{slot.dayOfWeek}</DayTitle>
                <DateTitle>{slot.date}</DateTitle>
              </TitleContent>
              <ScheduleList>
                {slot.hours.map((hour) => (
                  <ScheduleItem key={hour.id}>
                    {hour.startTime}h - {hour.endTime}h<Button>Agendar</Button>
                  </ScheduleItem>
                ))}
              </ScheduleList>
            </div>
          ))}
        </ContentWrapper>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalReserveSlot;
