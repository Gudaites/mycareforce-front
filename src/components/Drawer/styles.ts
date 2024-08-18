import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const DrawerContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  /* box-shadow: -2px 0 5px rgba(0, 0, 0, 0.4); */
  z-index: 1000;

  /* Adicione a animação */
  animation: ${slideIn} 0.2s ease-out;
`;

export const DrawerContent = styled.div`
  padding: 20px;
`;
