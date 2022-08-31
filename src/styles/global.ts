import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box ;
    }

    body {
        // COR DE FUNDO //
        // COR DO TEXTO //
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
    }

    ul {
        list-style: none;
    }

    :focus {
        outline: 0;
    }
`
