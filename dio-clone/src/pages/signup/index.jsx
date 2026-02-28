import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdLock, MdEmail, MdLocalPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";

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

const schemaSignUp = yup.object({
    name: yup.string().min(2, "O nome deve conter no mínimo 2 caracteres").required("O nome é obrigatório"),
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
    phone: yup.string().matches(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "Digite um número de telefone válido no formato +55 (99) 99999-9999"),
    password: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("A senha é obrigatória")
}).required();

const SignUp = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schemaSignUp),
        mode: "onSubmit"
    });

    const onSubmit = async formData => {
        try {
            const { data } = (await api.get(`/users?email=${formData.email}`));
            if (data.length > 0) {
                alert("E-mail já cadastrado!");
            } else {
                await api.post("/users", formData);
                alert("Conta criada com sucesso!");
                navigate("/login");
            }
        } catch (error) {
            console.error("Erro ao criar conta:", error);
        }
    };

    return (
        <>
            <Header autenticado={false} telaLogin={false} />
            <Container>
                <Column flex={2}>
                    <Title width="400px">
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido ns empresas mais desejadas.
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
                            <TitleLogin>Crie sua conta grátis</TitleLogin>
                            <SubtitleLogin>Preencha seus dados</SubtitleLogin>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input leftIcon={<FaUser />} name="name" control={control} errorMessage={errors.name?.message} placeholder="*Nome completo" />
                            <Input leftIcon={<MdEmail />} name="email" control={control} errorMessage={errors.email?.message} placeholder="*Seu melhor @e-mail" />
                            <Input leftIcon={<MdLocalPhone />} name="phone" control={control} errorMessage={errors.phone?.message} placeholder="+55 (99) 99999-9999" />
                            <Input leftIcon={<MdLock />} name="password" control={control} errorMessage={errors.password?.message} placeholder="*Senha" type="password" />
                            <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
                            <Row>
                                <p className="footer-text">Ao clicar em "Criar minha conta grátis", declaro que aceito as <a href="#">Políticas de Privacidade</a> e os <a href="#">Termos de Uso</a> da DIO.</p>
                            </Row>
                        </form>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { SignUp };