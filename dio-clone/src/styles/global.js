import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        line-height: 1.15;
        color: white;
    }
    
    body {
        background-color: #16171c;
    }
`;