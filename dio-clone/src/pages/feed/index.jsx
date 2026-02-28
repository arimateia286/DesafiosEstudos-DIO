import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import posts from './posts.json';
import users from './users.json';

import {
    Container,
    Title,
    TitleHighlight,
    Column,
} from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={2}>
                    <Title>FEED</Title>
                    {posts.map(post => (<Card postData={post} />))}
                </Column>
                <Column flex={1}>
                    <TitleHighlight>
                        <h3>RANKING DA SEMANA</h3>
                        <span />
                    </TitleHighlight>
                    {users.map(user => (<UserInfo userData={user} />))}
                </Column>
            </Container>
        </>
    );
}

export { Feed };