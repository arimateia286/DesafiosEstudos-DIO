import {
    InputContainer,
    InputText,
    ErrorText,
    IconContainer
} from "./styles";

import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
    return (
        <>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />} />
            </InputContainer>
        </>
    );
};

export { Input };