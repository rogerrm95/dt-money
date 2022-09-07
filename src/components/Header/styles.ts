import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors['gray-900']};
  padding: 2.5rem 0 7.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1144px;
    padding: 0 1.5rem;
    margin: 0 auto;

    img {
      object-fit: contain;
    }
  }

  // Breakpoint //
  // Mini mobile //
  @media (max-width: 400px) {
    div {
      img {
        width: 100px;
      }

      button {
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
      }
    }
  }
`

export const TransactionButton = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors['green-500']};
  color: ${(props) => props.theme.colors.white};

  padding: 0 1.25rem;
  border-radius: 6px;

  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors['green-300']};
    // Efeito hover apenas ao passar o mouse em cima //
    transition: background-color 0.3s;
  }

  @media (max-width: 400px) {
    & {
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
    }
  }
`
