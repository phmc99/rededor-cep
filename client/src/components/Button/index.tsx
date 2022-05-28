import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./style";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonInterface) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;