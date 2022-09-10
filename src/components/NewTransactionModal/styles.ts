import styled from 'styled-components'
import * as Modal from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Modal.Overlay)`
  position: fixed;

  width: 100vw;
  height: 100vh;
  inset: 0; // shortcut to top-bottom-left-right //

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Modal.Content)`
  width: 100vw;
  border-radius: 6px;

  padding: 2.5rem 3rem;

  background: ${(props) => props.theme.colors['gray-800']};

  // Centralizar o Content na tela //
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      padding: 1rem;
    }

    button[type='submit'] {
      height: 58px;

      background: ${(props) => props.theme.colors['green-500']};
      color: ${(props) => props.theme.colors.white};
      font-weight: 700;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme.colors['green-700']};
        transition: background-color 0.2s;
      }
    }
  }

  // Tablet á Desktop //
  @media (min-width: 600px) {
    & {
      min-width: 32rem;
      width: auto;

      bottom: -1%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const CloseButton = styled(Modal.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0; // remove white space //

  cursor: pointer;
  color: ${(props) => props.theme.colors['gray-500']};
  background: transparent;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;

  & {
    box-shadow: none;
  }
`

interface TransactionTypeButtonProps {
  variant: 'receipt' | 'removal'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme.colors['gray-700']};
  color: ${(props) => props.theme.colors['gray-300']};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'receipt'
        ? props.theme.colors['green-300']
        : props.theme.colors['red-300']};
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'receipt'
        ? props.theme.colors['green-500']
        : props.theme.colors['red-500']};

    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.colors['gray-600']};
    transition: background-color 0.2s;
  }
`
