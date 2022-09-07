import styled, { css } from 'styled-components'

// Lista dos Cards de transações //
export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0rem 1.5rem 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: nowrap;
  gap: 2rem;

  margin-top: -5rem;
  overflow: auto;

  // VERTICAL SCROLL BAR //
  /* width */
  ::-webkit-scrollbar {
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['gray-600']};
    border-radius: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors['green-500']};
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.colors['green-300']};
  }

  /* 
  svg {
    color: ${(props) =>
    props.typeTransaction && colorsTypeOfTransation[props.typeTransaction]};
  }
  */
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme.colors['gray-600']};
  border-radius: 6px;
  padding: 2rem;

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
    props.variant === 'green' &&
    css`
      background: ${props.theme.colors['green-700']};
    `}

  // Esconde a data da última atualização //
  @media (min-width: 900px) {
    > span {
      display: none;
    }
  }
`
