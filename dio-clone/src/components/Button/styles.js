import { styled, css } from "styled-components";

export const ButtonContainer = styled.button`
    background-color: transparent;
    border: 1px solid white;
    border-radius: 8px;
    position: relative;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;

   
    width: 100%;

    &:hover {
        background-color: rgb(127, 40, 181);
        border: 1px solid rgb(127, 40, 181);
        cursor: pointer;
    }

    ${({ variant }) => variant !== "primary" && css`
        background: rgb(127, 40, 181);
        border: 1px solid rgb(127, 40, 181);
        &:hover {
            background: rgb(147, 46, 209);
            border: 1px solid rgb(147, 46, 209);
        }
    `}
`;