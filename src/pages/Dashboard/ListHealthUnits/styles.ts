import styled from "styled-components";

export const ListCards = styled.main`
  flex: 1;
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  max-width: 1120px;
`;

export const SkeletonItem = styled.div`
  background-color: #ccc;
  width: 180px;
  height: 250px;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
  margin: 10px;

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
