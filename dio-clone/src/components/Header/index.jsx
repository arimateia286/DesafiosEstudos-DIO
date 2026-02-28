import { useNavigate } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";

import { Button } from "../Button";
import { UserPicture } from "../UserPicture";

import logoImage from "../../assets/logo.svg";

import {
    Menu,
    Wrapper,
    Row,
    Container,
    Logo,
} from "./styles";

const Header = ({ autenticado, telaLogin = false }) => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate("/login");
    };

    const handleGoToSignUp = () => {
        navigate("/signup");
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Logo src={logoImage} />
                    <Menu href="#">Carreiras</Menu>
                    <Menu href="#">Bootcamps</Menu>
                    <Menu href="#">Projetos</Menu>
                    <Menu href="#">Comunidade</Menu>
                    <Menu href="#">Planos</Menu>
                    <Menu href="/">Home</Menu>
                </Row>
                <Row>
                    {autenticado ?
                        (
                            <>
                                <UserPicture imagem="https://avatars.githubusercontent.com/u/168143602?v=4" />
                                <FaChevronDown />
                            </>
                        )
                        :
                        (
                            <>
                                {telaLogin ? null : (<Button title="Entrar" onClick={handleGoToLogin} />)}
                                <Button title="Criar conta" variant="secondary" onClick={handleGoToSignUp} />
                            </>
                        )
                    }
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };