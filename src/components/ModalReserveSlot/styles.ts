import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 420px;
  max-width: 90%;
  max-height: 618px; /* Definindo altura máxima */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }
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

export const SkeletonItem = styled.div`
  background-color: #ccc;
  height: 60px;
  width: 100%;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
  margin: 0 0 20px 0;

  @keyframes pulse {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #ddd;
    }
    100% {
      background-color: #eee;
    }
  }
`;
