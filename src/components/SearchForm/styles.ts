import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;

    padding: 1rem;
    border-radius: 6px;
    border: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    height: 3.5rem;
    width: 3.5rem;
    padding: 1rem;

    color: ${(props) => props.theme.colors['green-300']};
    border: 1px solid ${(props) => props.theme.colors['green-300']};
    background: transparent;

    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;

    span {
      display: none;
    }

    &:hover {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors['green-500']};
      border-color: ${(props) => props.theme.colors['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    // Exibe o texto do botão //
    @media (min-width: 900px) {
      & {
        width: 147px;
      }

      span {
        display: block;
      }
    }
  }
`
