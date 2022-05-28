import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Container, ContentInput } from "./style";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: IconType;
  error: any;
  register: any;
}

export const Input = ({ icon: Icon, register, error, ...rest }: InputProps) => {
  return (
    <Container>
      <ContentInput error={error ? true : false}>
        {Icon && <Icon />}
        <InputMask mask="99999-999" autoComplete="off" {...rest} {...register} />
      </ContentInput>
    </Container>
  );
};