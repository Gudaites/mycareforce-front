import styled from "styled-components";

export const Content = styled.div`
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
