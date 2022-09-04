import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box ;
    }

    body {
        background: ${(props) => props.theme.colors['gray-800']} ;
        color: ${(props) => props.theme.colors['gray-400']};
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

    input {
        background: ${(props) => props.theme.colors['gray-900']};
        color: ${(props) => props.theme.colors['gray-300']};
        caret-color: ${(props) => props.theme.colors.white};
        border: none;

        &::placeholder {
            color: ${(props) => props.theme.colors['gray-500']}; 
        }
    }

    ul {
        list-style: none;
    }

    :focus {
        outline: 0;
    }
`
