import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: ${props => props.maxWidth || '90%'};
    margin: 0 auto;
    margin-top: ${props => props.marginTop || '40px'};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-style: normal;
    font-weight: ${props => props.weight || '700'};
    font-size: ${props => props.size || '32px'};
    width: ${props => props.width || '320px'};
    margin-bottom: ${props => props.mb || '0'};
    line-height: ${props => props.lh || 'normal'};
    color: ${props => props.color || 'inherit'};
`;

export const TitleHighlight = styled.span`
    color: #e4105d;
`;

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
`;

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #7f28b5;
`;

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: black;
`;

export const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem 3rem;

    .footer-text {
        color: black;
        font-size: 0.825rem;
        text-decoration: none;

        a {
            color: #7f28b5;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .esqueci, .criar {
        color: black;
        font-size: 0.825rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Column = styled.div`
    flex: ${props => props.flex || 1};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
