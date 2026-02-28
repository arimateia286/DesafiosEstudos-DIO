import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #7f28b5;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const IconContainer = styled.div`
    * {
        color: #7f28b5;
    }

    margin-right: 10px;
`;

export const ErrorText = styled.span`
    color: red;
    font-size: 12px;
`;

export const InputText = styled.input`
    background: transparent;
    color: black;
    border: none;
    width: 100%;
    height: 30px;
    font-size: 100%;
    outline: 0;
`;