import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
// Utils //
import { priceFormatter } from '../../utils/formatter'
// Styles //
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      {/* Entradas */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormatter.format(summary.receipt)}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saídas */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.removal)}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saldo */}
      <SummaryCard variant={summary.total < 0 ? 'red' : 'green'}>
        <header>
          <span>Saldo</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>
    </SummaryContainer>
  )
}
