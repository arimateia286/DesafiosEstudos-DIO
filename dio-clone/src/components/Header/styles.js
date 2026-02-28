import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 98%;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const Wrapper = styled.div`
    background-color: #0a0a0a;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.a`
    font-style: normal;
    font-weight: 700;
    margin-right: 12px;
    line-height: 25px;
   
    font-size: 16px;
    text-decoration: none;
    transition: color 0.2s ease-out;

    &:hover {
        cursor: pointer;
        color: rgb(127, 40, 181);
    }
`;

export const Logo = styled.img`
    height: 34px;
`;