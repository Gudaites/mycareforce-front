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

export const TitleContent = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 7px;
`;

export const DayTitle = styled.h3`
  color: #18A0FB;
  margin-right: 10px;
`;

export const DateTitle = styled.h3`
  color: #A1A1A1;
  font-size: 14px;
`;

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  button {
    max-width: 102px;
    height: 36px;
  }
`;

export const ScheduleItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #F1F1F1;
  border-radius: 12px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
`;
