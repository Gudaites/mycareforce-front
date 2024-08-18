import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 180px;
  max-height: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #18A0FB;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardAddress = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardButton = styled.button`
  background-color: #18A0FB;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-top: auto;

  &:hover {
    background-color: #18A0FB;
  }
`;
