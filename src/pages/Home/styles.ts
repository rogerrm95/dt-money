import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;

  header {
    height: 200px;
    background: ${(props) => props.theme.colors['gray-900']};
  }

  .header-box,
  main {
    max-width: 1144px;
  }

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 3.5rem 1.5rem;
    margin: auto;

    img {
      object-fit: contain;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${(props) => props.theme.colors['green-500']};
      color: ${(props) => props.theme.colors.white};

      padding: 0.75rem 1.25rem;
      border-radius: 6px;

      font-weight: 700;
      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors['green-300']};
      }
    }
  }

  main {
    width: 100%;
    margin: -2.5rem auto;
    padding: 0rem 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    overflow: hidden;

    // Lista dos Cards de transações //
    .card-list {
      display: flex;
      gap: 2rem;
      overflow-x: auto;
      padding-bottom: 1rem;

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
    }
  }

  // Breakpoint //
  // Desktop //
  @media (min-width: 1144px) {
    .header-box {
      padding: 2.5rem 1.5rem;
    }
  }

  // Breakpoint //
  // Mini mobile //
  @media (max-width: 400px) {
    .header-box {
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

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

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

interface TableRowProps {
  typeTransaction: 'receipt' | 'removal' | undefined
}

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

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => props.theme.colors['gray-700']};
  border-radius: 5px;

  td {
    padding: 1.5rem 2rem;

    // Titulo da Transação //
    &:first-child {
      border-radius: 5px 0 0 5px;
      width: 50%;
    }

    // Valor $$ //
    &:nth-child(2) {
      width: 25%;
      color: ${(props) =>
        props.typeTransaction && colorsTypeOfTransation[props.typeTransaction]};
    }

    // Data //
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`
