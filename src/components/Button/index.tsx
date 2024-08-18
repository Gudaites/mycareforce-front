import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => (
  <Container {...rest}>{isLoading ? "Carregando..." : children}</Container>
);

export default Button;
