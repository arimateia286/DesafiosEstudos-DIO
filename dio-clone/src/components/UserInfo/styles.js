import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2px;
`;

export const NameText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
   
`;

export const XpText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
   
`;

export const Progress = styled.div`
    width: 160px;
    height: 8px;
    background-color: white;
    border-radius: 4px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percentual }) => percentual}%;
        height: 8px;
        border-radius: 4px;
        background-color: #00af00;
    }
`;