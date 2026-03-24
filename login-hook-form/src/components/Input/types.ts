import type { Control } from "react-hook-form";
import type { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, any>;
  icon?: React.ReactNode;
  name: "email" | "password";
  errorMessage?: string;
}
