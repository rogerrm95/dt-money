import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
// Styles //
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      {/* Entradas */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>R$ 17.400</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saídas */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>R$ 17.400</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>

      {/* Saldo */}
      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>R$ 17.400</strong>

        <span>Última atualização em 13 de Julho</span>
      </SummaryCard>
    </SummaryContainer>
  )
}
