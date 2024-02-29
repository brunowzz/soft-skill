import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter;
    }

    body {
        background: rgba(249, 249, 249, 0.80);
    }

    a {
        text-decoration: none;
    }
`;
