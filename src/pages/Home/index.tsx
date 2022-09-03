// Libs //
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// Image //
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Calendar,
  CurrencyDollar,
  TagSimple,
} from 'phosphor-react'
import LogoDTMoney from '../../assets/logo-dtmoney.png'
// Components //
import { Card } from '../../components/Card'
// Styles //
import { Container } from './styles'

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

const total = Number(17400 - 5000).toLocaleString('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})

const isPositive = 5000 - 5500 > 0

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
        <section>
          <h2>
            Transações <span>4 itens</span>
          </h2>

          {/* <ul>
            <li>
              <p>Desenvolvimento de website</p>
              <strong>R$ 12.000,00</strong>
              <div>
                <span>
                  <TagSimple size={16} /> Venda
                </span>
                <span>
                  <Calendar size={16} /> 13/04/2022
                </span>
              </div>
            </li>
            
            <li>
              <p>Desenvolvimento de website</p>
              <strong>R$ 12.000,00</strong>
              <div>
                <span>
                  <TagSimple size={16} /> Venda
                </span>
                <span>
                  <Calendar size={16} /> 13/04/2022
                </span>
              </div>
            </li>
          </ul> */}
        </section>
      </main>
    </Container>
  )
}
