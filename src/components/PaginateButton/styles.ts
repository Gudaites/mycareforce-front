import styled from "styled-components";
import { shade } from 'polished';

export const PaginateContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18A0FB;
  color: #FFFFFF;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#18A0FB')};
  }
`;
