// Icons //
import { CalendarBlank, TagSimple } from 'phosphor-react'
// Styles //
import { TransactionContainer } from './styles'

interface TransactionItemProps {
  name: string
  price: number
  category: string
  typeTransaction: 'receipt' | 'removal'
  date: string
}

export function TransactionItem({
  name,
  price,
  category,
  typeTransaction,
  date,
}: TransactionItemProps) {
  return (
    <TransactionContainer typeTransaction={typeTransaction}>
      <p>
        {name}
        <br />
        <strong>R$ {price}</strong>
      </p>

      <footer>
        <span>
          <TagSimple size={16} /> {category}
        </span>

        <span>
          <CalendarBlank size={16} /> {date}
        </span>
      </footer>
    </TransactionContainer>
  )
}
