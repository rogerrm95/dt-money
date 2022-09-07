// Icons //
import { CalendarBlank, TagSimple } from 'phosphor-react'
// Styles //
import { TransactionContainer } from './styles'

interface TransactionItemProps {
  name: string
  price: string | number
  category: string
  typeTransaction?: 'receipt' | 'removal' | undefined
}

export function TransactionItem({ typeTransaction }: TransactionItemProps) {
  return (
    <TransactionContainer typeTransaction={typeTransaction}>
      <p>
        Desenvolvimento de website
        <br />
        <strong>R$ 12.000,00</strong>
      </p>

      <footer>
        <span>
          <TagSimple size={16} /> Venda
        </span>

        <span>
          <CalendarBlank size={16} /> 13/04/2022
        </span>
      </footer>
    </TransactionContainer>
  )
}
