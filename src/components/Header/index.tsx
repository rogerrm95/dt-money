// Logo //
import LogoDTMoney from '../../assets/logo-dtmoney.png'
// Styles //
import { Container, TransactionButton } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img src={LogoDTMoney} alt="Logotipo" />

        <TransactionButton>Nova transação</TransactionButton>
      </div>
    </Container>
  )
}
