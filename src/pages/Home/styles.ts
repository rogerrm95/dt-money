import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
`

export const Transactions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
  max-width: 1144px;
  padding: 0 1.5rem;
  margin: 4rem 0 auto;

  h2 {
    display: flex;
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};

    span {
      margin-left: auto;
      font-size: 1rem;
      color: ${(props) => props.theme.colors['gray-400']};
    }
  }

  .search-box {
    display: flex;
    gap: 0.5rem;

    input {
      width: 100%;

      padding: 1rem;
      height: 3.5rem;

      border-radius: 6px;
      border: none;
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

      transition: background-color 0.2s, color 0.2s;

      span {
        display: none;
      }

      &:hover {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors['green-300']};
        border: 1px solid transparent;
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
  }

  // Lista de Transações //
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 1.25rem;

    // Versão Laptop / Desktop //
    // Esconde a lista //
    @media (min-width: 900px) {
      display: none;
    }
  }
`

const colorsTypeOfTransation = {
  receipt: '#00B37E',
  removal: '#F75A68',
}

export const TableContainer = styled.div`
  display: none;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
  }

  // Versão Laptop / Desktop //
  // Exibe a tabela //
  @media (min-width: 900px) {
    display: block;

    width: 100%;
    margin-bottom: 1.25rem; //20px//
    overflow: auto;
  }
`

interface TableRowProps {
  variant: 'receipt' | 'removal'
}

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => props.theme.colors['gray-700']};

  td {
    padding: 1.25rem 2rem;

    // Titulo da Transação //
    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    // Valor $$ //
    &:nth-child(2) {
      width: 25%;
      color: ${(props) => colorsTypeOfTransation[props.variant]};
    }

    // Data //
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
