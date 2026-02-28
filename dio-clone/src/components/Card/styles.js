import { css, styled } from "styled-components";


export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;
    border-radius: 4px;
    overflow: hidden;
`;

export const ImageBackground = styled.div`
    width: 100%;
    height: 100%;
    max-height: 250px;
    overflow: hidden;
    
    img {
        width: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
       
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
       
    }
`;

export const PostInfo = styled.div`
    margin-bottom: 12px;
    width: 95%;

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 25px;
       
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        &::after {
            content: '... Ver Mais';
        }
    }
`;

export const HasInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff80;
    }
`;