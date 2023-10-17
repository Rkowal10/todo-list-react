import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.color.alto};
        padding: 0px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            padding: 10px;
            padding-top: 0px;
        }
    }
`;