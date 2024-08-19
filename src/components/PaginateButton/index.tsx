import { ButtonHTMLAttributes } from "react";
import { Button, PaginateContent } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
}

const PaginateButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <PaginateContent>
      <Button {...rest}>
        <IoIosArrowDown size={30}></IoIosArrowDown>
      </Button>
    </PaginateContent>
  );
};

export default PaginateButton;
