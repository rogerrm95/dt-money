import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTransaction } from '../../hooks/useTransaction'
// Styles //
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useTransaction()

  // Calcula os valores de ENTRADA | SAÍDA | SALDO //
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'receipt') {
        acc.receipt += transaction.price
        acc.total += transaction.price
      } else {
        acc.removal += transaction.price
        acc.total += -transaction.price
      }

      return acc
    },
    {
      receipt: 0,
      removal: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      {/* Entradas */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>R$ {summary.receipt}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saídas */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>R$ {summary.removal}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saldo */}
      <SummaryCard variant={summary.total > 0 ? 'green' : 'red'}>
        <header>
          <span>Saldo</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>R$ {summary.total}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>
    </SummaryContainer>
  )
}
