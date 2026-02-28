import { UserPicture } from "../UserPicture";

import {
    Container,
    InfoContainer,
    NameText,
    Progress,
    XpText
} from "./styles";

const UserInfo = ({ userData }) => {
    const { name, picture, obtainedXp, necessaryXp, position } = userData;
    return (
        <Container>
            {position}°
            <UserPicture imagem={picture} tamanho={52}/>
            <InfoContainer>
                <NameText>{name}</NameText>
                <XpText>XP {obtainedXp}/{necessaryXp}</XpText>
                <Progress percentual={obtainedXp / necessaryXp * 100} />
            </InfoContainer>
        </Container>
    );
};

export { UserInfo };