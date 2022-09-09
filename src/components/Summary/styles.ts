import styled, { css } from 'styled-components'

// Lista dos Cards de transações //
export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0rem 1.5rem 1rem;

  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;

  margin-top: -5rem;
  overflow-x: auto;
`

interface SummaryCardProps {
  variant?: 'green' | 'red'
}

const variantColors = {
  green: '#00875F',
  red: '#AB222E',
} as const

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 100%;
  min-width: 280px;
  border-radius: 6px;
  padding: 2rem;

  background: ${(props) => props.theme.colors['gray-600']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors['gray-300']};
  }

  strong {
    display: block; // Para poder aplicar MARGIN //
    margin-top: 1rem;
    font-size: 2rem;
  }

  > span {
    display: block;

    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors['gray-500']};
  }

  // Estilização condicional //
  ${(props) =>
    props.variant &&
    css`
      background: ${variantColors[props.variant]};
      color: ${(props) => props.theme.colors.white};

      span {
        color: ${(props) => props.theme.colors.white};
      }
    `}

  // Esconde a data da última atualização //
  @media (min-width: 900px) {
    > span {
      display: none;
    }
  }
`
