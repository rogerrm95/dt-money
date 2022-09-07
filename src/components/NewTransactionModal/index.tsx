// Lib para Acessibilidade - Modal//
import * as Modal from '@radix-ui/react-dialog'
// Icons //
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
// Styles //
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Modal.Portal>
      {/* Portals - Olhar Documentação do React */}
      <Overlay />

      <Content>
        <Modal.Title>Nova Transação</Modal.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição..." required />
          <input type="number" placeholder="Preço..." required />
          <input type="text" placeholder="Categoria..." required />

          <TransactionType>
            <TransactionTypeButton
              type="button"
              variant="receipt"
              value="receipt"
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton
              type="button"
              variant="removal"
              value="removal"
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Modal.Portal>
  )
}
