import styled from 'styled-components'

interface TransactionContainerProps {
  typeTransaction: 'receipt' | 'removal' | undefined
}

const colorsTypeOfTransation = {
  receipt: '#00B37E',
  removal: '#F75A68',
}

export const TransactionContainer = styled.li<TransactionContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.25rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['gray-700']};

  p {
    color: ${(props) => props.theme.colors['gray-300']};
  }

  strong {
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) =>
      props.typeTransaction && colorsTypeOfTransation[props.typeTransaction]};
  }

  footer {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`
