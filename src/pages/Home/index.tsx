// Libs //
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// Image //
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
  MagnifyingGlass,
} from 'phosphor-react'
import LogoDTMoney from '../../assets/logo-dtmoney.png'
// Components //
import { Card } from '../../components/Card'
import { TransactioItem } from '../../components/TransactionItem'
// Styles //
import { Container, SectionContainer, TableContainer, TableRow } from './styles'

// TEMPORÁRIO //
const tempValues = {
  amountToReceveid: Number(17400).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
  }),
  amountToRemoval: Number(5000).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
  }),
  lastUpdatedAt: format(new Date(), "dd 'de' MMM", { locale: ptBR }),
  type: 'removal',
}

const total = Number(1400 - 5000).toLocaleString('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})

const isPositive = 1400 - 5000 > 0

export function Home() {
  return (
    <Container>
      <header>
        <div className="header-box">
          <img src={LogoDTMoney} alt="Logotipo" />

          <button>Nova transação</button>
        </div>
      </header>

      <main>
        {/* Entradas | Saídas | Saldo */}
        <ul className="card-list">
          <Card
            key={1}
            amount={tempValues.amountToReceveid}
            lastUpdatedAt={tempValues.lastUpdatedAt}
            typeTransaction={'receipt'}
            iconType={<ArrowCircleUp size={32} />}
          />
          <Card
            key={2}
            amount={tempValues.amountToRemoval}
            lastUpdatedAt={tempValues.lastUpdatedAt}
            typeTransaction={'removal'}
            iconType={<ArrowCircleDown size={32} />}
          />
          <Card
            key={3}
            amount={total}
            lastUpdatedAt={tempValues.lastUpdatedAt}
            iconType={<CurrencyDollar size={32} weight="bold" />}
            statusCard={isPositive ? 'positive' : 'negative'}
          />
        </ul>

        {/* Lista de Transações */}
        <SectionContainer>
          <h2>
            Transações <span>4 itens</span>
          </h2>

          <div className="search-box">
            <input type="text" placeholder="Busque uma transação..." />
            <button>
              <MagnifyingGlass weight="bold" size={22} />
              <span>Buscar</span>
            </button>
          </div>

          <ul>
            <TransactioItem
              name="Salário CLT"
              price={2500}
              category="Venda"
              typeTransaction="receipt"
            />
          </ul>

          <TableContainer>
            <table>
              <tbody>
                <TableRow typeTransaction="removal">
                  <td>Desenvolvimento Website</td>
                  <td>R$ 12.000,00</td>
                  <td>Venda</td>
                  <td>13/08/2022</td>
                </TableRow>

                <TableRow typeTransaction="receipt">
                  <td>Desenvolvimento Website</td>
                  <td>R$ 16.000,00</td>
                  <td>Venda</td>
                  <td>01/08/2022</td>
                </TableRow>
                <TableRow typeTransaction="removal">
                  <td>Desenvolvimento Website</td>
                  <td>R$ 11.000,00</td>
                  <td>Venda</td>
                  <td>01/05/2022</td>
                </TableRow>
                <TableRow typeTransaction="receipt">
                  <td>Desenvolvimento Website</td>
                  <td>R$ 1.000,00</td>
                  <td>Venda</td>
                  <td>29/12/2021</td>
                </TableRow>
              </tbody>
            </table>
          </TableContainer>
        </SectionContainer>
      </main>
    </Container>
  )
}
