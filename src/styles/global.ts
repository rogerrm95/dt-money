import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box ;
    }

    body {
        background: ${(props) => props.theme.colors['gray-800']} ;
        color: ${(props) => props.theme.colors['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem "Roboto", sans-serif;
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
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors['green-500']} ;
    }
`
