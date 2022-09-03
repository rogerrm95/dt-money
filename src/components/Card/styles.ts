import styled from 'styled-components'

interface CardContainerProps {
  typeTransaction: 'receipt' | 'removal' | undefined
}

const colorsTypeOfTransation = {
  receipt: '#00B37E',
  removal: '#F75A68',
}

export const CardContainer = styled.li<CardContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  padding: 1.25rem 1.25rem 1.25rem 2rem;
  gap: 0.75rem;

  width: 100%;
  min-width: 280px;

  background: ${(props) => props.theme.colors['gray-600']};
  border-radius: 6px;

  & > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    color: ${(props) =>
      props.typeTransaction && colorsTypeOfTransation[props.typeTransaction]};
  }

  p {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors['gray-300']};
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-500']};
  }

  // Status Card - Aobre a quantidade de dinheiro que o usuário tem no momento //
  // Positivo o card ficará verde | Negativo o card ficará vermelho //
  &.positive {
    background: ${(props) => props.theme.colors['green-500']};

    p,
    span,
    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &.negative {
    background: ${(props) => props.theme.colors['red-500']};

    p,
    span,
    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  // Esconde a data da última atualização //
  @media (min-width: 1144px) {
    & span:last-child {
      display: none;
    }
  }
`
