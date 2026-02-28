import { Likes } from "../../components/Likes";
import { UserPicture } from "../UserPicture";

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    PostInfo,
    HasInfo,
} from "./styles";

const Card = ({ postData }) => {
    const { post, user } = postData;
    return (
        <CardContainer>
            {post.banner ? (
                <ImageBackground>
                    <img src={post.banner} />
                </ImageBackground>
            ) : null}
            <Content>
                <UserInfo>
                    <UserPicture imagem={user.picture} tamanho={58} />
                    <div>
                        <h4>{user.name}</h4>
                        <p>{post.date}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </PostInfo>
                <HasInfo>
                    <h4>{post.tags}</h4>
                    <Likes />
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };