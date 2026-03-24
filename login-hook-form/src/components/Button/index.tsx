import { ButtonContainer } from "./styles";
import type { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  return <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
