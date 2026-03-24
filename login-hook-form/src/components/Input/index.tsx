import { InputContainer, IconContainer, ErrorMessage } from "./styles";
import type { IInputProps } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, icon, ...rest }: IInputProps) => {
  return (
    <>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <InputContainer>
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />
          )}
        />
      </InputContainer>
    </>
  );
};

export default Input;
