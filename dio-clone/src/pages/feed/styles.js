import styled from "styled-components";
import {
    Container as BaseContainer,
    Column as BaseColumn,
    Title as BaseTitle
} from "../styles";

export const Container = styled(BaseContainer)`
    max-width: 95%;
    margin-top: 20px;
    align-items: flex-start;
`;

export const Title = styled(BaseTitle).attrs({ as: "h3" })`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 25px;
`;

export const TitleHighlight = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        width: 320px;
        margin-bottom: 12px;
        color: #ffffff70;
    }

    span {
        width: 30px;
        border-bottom: 3px solid rgb(243, 20, 181);
    }
`;

export const Column = styled(BaseColumn)`
    flex: ${({ flex }) => `0 0 ${flex}`};
    padding-right: 24px;
`;
