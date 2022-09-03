// Styles //
import { CardContainer } from './styles'

interface CardProps {
  typeTransaction?: 'receipt' | 'removal' | undefined
  amount: string
  lastUpdatedAt: string
  statusCard?: 'positive' | 'negative' | null
  // eslint-disable-next-line no-undef
  iconType: JSX.Element
}

export function Card({
  amount,
  iconType,
  lastUpdatedAt,
  typeTransaction = undefined,
  statusCard = null,
}: CardProps) {
  return (
    <CardContainer
      typeTransaction={typeTransaction}
      className={statusCard || ''}
    >
      <div>
        <span>Entradas</span>
        {iconType}
      </div>

      <p>{amount}</p>

      <span>{`Última atualização em ${lastUpdatedAt}`}</span>
    </CardContainer>
  )
}
