import { useMemo } from "react";
import {
    UserImage
} from "./styles";

const UserPicture = ({ imagem, tamanho = 32 }) => {
    const colors = ["#21de79", "#e6e345", "#522d73"];

    return (
        <UserImage src={imagem} tamanho={tamanho} border={colors[parseInt(Math.random() * colors.length)]} />
    );
};

export { UserPicture };