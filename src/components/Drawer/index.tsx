import React from "react";
import { uuidv7 } from "uuidv7";
import {
  DrawerOverlay,
  DrawerContainer,
  ContentWrapper,
  Title,
} from "./styles";
import { useRegistration } from "../../hooks/registration";
import ListDate from "../ListDate";

interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const { registrations } = useRegistration();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <DrawerOverlay onClick={handleOverlayClick}>
      <DrawerContainer>
        <Title>
          <h1>Meus Horarios</h1>
        </Title>
        <ContentWrapper>
          {registrations?.map((item) => (
            <ListDate
              key={uuidv7()}
              slot={{
                ...item,
                hours: item.hours.map((item) => {
                  return { ...item, isScheduled: true };
                }),
              }}
            />
          ))}
        </ContentWrapper>
      </DrawerContainer>
    </DrawerOverlay>
  );
};

export default Drawer;
