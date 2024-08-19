import React from "react";
import {
  Overlay,
  ModalContainer,
  Title,
  ContentWrapper,
  SkeletonItem,
} from "./styles";
import { DayData } from "../../services/available-slots";
import ListDate from "../ListDate";

interface ModalProps {
  slots: DayData[] | [];
  isOpen: boolean;
  onClose: () => void;
  onClick: (id: string) => void;
  isLoading: boolean;
}

const ModalReserveSlot: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  slots,
  onClick,
  isLoading,
}) => {
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
          <h1>Horários Disponíveis</h1>
        </Title>
        {isLoading ? (
          <>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </>
        ) : (
          <ContentWrapper>
            {slots.map((item, index) => (
              <ListDate key={index} slot={item} onClick={onClick} />
            ))}
          </ContentWrapper>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default ModalReserveSlot;
