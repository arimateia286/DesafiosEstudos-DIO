import { styled, css } from "styled-components";

export const LikesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 8px;

    border: 1px solid white;
    border-radius: 32px;
    padding: 2px 8px;
    margin-top: 12px;

    * {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
       
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background-color: transparent;
        border: none;
    }

    button:hover {
        scale: 110%;
    }
`;