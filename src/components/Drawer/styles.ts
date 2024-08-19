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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0 20px 0;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const DrawerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100%;
  background-color: #fff;
  z-index: 1000;

  animation: ${slideIn} 0.2s ease-out;
`;


export const ContentWrapper = styled.div`
  overflow-y: scroll;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
