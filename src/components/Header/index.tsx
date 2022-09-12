// Modal - Dialog //
// Lib para Acessibilidade //
import * as Modal from '@radix-ui/react-dialog'
// Logo //
import LogoDTMoney from '../../assets/logo-dtmoney.png'
// Components //
import { NewTransactionModal } from '../NewTransactionModal'
// Styles //
import { HeaderContainer, TransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoDTMoney} alt="Logotipo" />

        <Modal.Root>
          <Modal.Trigger asChild>
            <TransactionButton>Nova transação</TransactionButton>
          </Modal.Trigger>

          <NewTransactionModal />
        </Modal.Root>
      </div>
    </HeaderContainer>
  )
}
