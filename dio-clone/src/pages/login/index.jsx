import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdLock, MdEmail } from "react-icons/md";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import {
    Container,
    Title,
    TitleLogin,
    SubtitleLogin,
    Wrapper,
    Column,
    Row
} from "./styles";

const schemaLogin = yup.object({
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
    password: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("A senha é obrigatória")
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schemaLogin),
        mode: "onSubmit"
    });

    const onSubmit = async formData => {
        try {
            const { data } = (await api.get(`/users?email=${formData.email}&password=${formData.password}`));
            if (data.length > 0) {
                navigate("/feed");
            } else {
                alert("E-mail ou senha inválidos");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <>
            <Header autenticado={false} telaLogin={true} />
            <Container>
                <Column flex={2}>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido ns empresas mais desejadas.
                    </Title>
                </Column>
                <Column flex={1}>
                    <Wrapper>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "1rem 0"
                        }}>
                            <TitleLogin>Já tem cadastro?</TitleLogin>
                            <SubtitleLogin>Faça seu login</SubtitleLogin>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input leftIcon={<MdEmail />} name="email" control={control} errorMessage={errors.email?.message} placeholder="Endereço de e-mail" />
                            <Input leftIcon={<MdLock />} name="password" control={control} errorMessage={errors.password?.message} placeholder="*Senha" type="password" />
                            <Button title="Entrar" variant="secondary" type="submit" />
                            <Row>
                                <a href="#" className="esqueci">Esqueci minha senha</a>
                                <a href="/signup" className="criar">Criar conta</a>
                            </Row>
                        </form>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Login };