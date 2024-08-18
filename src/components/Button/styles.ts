import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonProps } from '.';


export const Container = styled.button<ButtonProps>`
  background: ${props => props.disabled ? '#ccc' : '#18A0FB'};
  color: #FFFFFF;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : shade(0.2, '#18A0FB')};
  }

  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;
