import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Title } from "./styles";
import { defaultValues } from "./types";
import type { IFormLogin } from "./types";

import { MdLock, MdEmail } from "react-icons/md";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "No minimo 6 caracteres").required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid, touchedFields },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
    reValidateMode: "onChange",
  });

  const handleLogin = () => {
    alert("Login realizado com sucesso!");
  };

  return (
    <Container>
      <LoginContainer>
        <Title>Entrar</Title>
        <Input
          name="email"
          placeholder="Email"
          icon={<MdEmail />}
          control={control}
          errorMessage={touchedFields.email ? errors?.email?.message : undefined}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={<MdLock />}
          control={control}
          errorMessage={touchedFields.password ? errors?.password?.message : undefined}
        />
        <Button disabled={!isValid} title="Entrar" onClick={handleLogin} />
      </LoginContainer>
    </Container>
  );
};

export default Login;
