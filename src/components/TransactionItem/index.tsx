// Icons //
import { CalendarBlank, TagSimple } from 'phosphor-react'
// Utils //
import { dateFormatter, priceFormatter } from '../../utils/formatter'
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
        <strong>{priceFormatter.format(price)}</strong>
      </p>

      <footer>
        <span>
          <TagSimple size={16} /> {category}
        </span>

        <span>
          <CalendarBlank size={16} /> {dateFormatter.format(new Date(date))}
        </span>
      </footer>
    </TransactionContainer>
  )
}
