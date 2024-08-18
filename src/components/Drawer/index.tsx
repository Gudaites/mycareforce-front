/* Drawer.tsx */
import React from "react";
import { DrawerOverlay, DrawerContainer, DrawerContent } from "./styles";

interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <DrawerOverlay onClick={handleOverlayClick}>
      <DrawerContainer>
        <DrawerContent>{/* Colocar o rest aqui*/}</DrawerContent>
      </DrawerContainer>
    </DrawerOverlay>
  );
};

export default Drawer;
