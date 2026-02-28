import styled from "styled-components";

export const UserImage = styled.img`
    width: ${({ tamanho }) => `${tamanho}px` };
    height: ${({ tamanho }) => `${tamanho}px` };
    border-radius: 50%;
    border: ${({ border }) => `3px solid ${border}`};
`;