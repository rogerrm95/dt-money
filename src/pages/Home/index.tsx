// Libs //
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// Components //
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionItem } from '../../components/TransactionItem'
// Styles //
import {
  HomeContainer,
  Transactions,
  TransactionsTable,
  TableRow,
} from './styles'

// TEMPORÁRIO //
// const tempValues = {
//   amountToReceveid: Number(17400).toLocaleString('pt-BR', {
//     currency: 'BRL',
//     style: 'currency',
//     minimumFractionDigits: 2,
//   }),
//   amountToRemoval: Number(5000).toLocaleString('pt-BR', {
//     currency: 'BRL',
//     style: 'currency',
//     minimumFractionDigits: 2,
//   }),
//   lastUpdatedAt: format(new Date(), "dd 'de' MMM", { locale: ptBR }),
//   type: 'removal',
// }

export function Home() {
  return (
    <HomeContainer>
      <Header />
      {/* Lista de Transações */}
      <Summary />

      <Transactions>
        <h2>
          Transações <span>4 itens</span>
        </h2>

        <SearchForm />

        <ul>
          <TransactionItem
            name="Salário CLT"
            price={2500}
            category="Venda"
            typeTransaction="receipt"
          />
        </ul>

        <TransactionsTable>
          <table>
            <tbody>
              <TableRow variant="removal">
                <td>Desenvolvimento Website</td>
                <td>R$ 12.000,00</td>
                <td>Venda</td>
                <td>13/08/2022</td>
              </TableRow>

              <TableRow variant="receipt">
                <td>Desenvolvimento Website</td>
                <td>R$ 16.000,00</td>
                <td>Venda</td>
                <td>01/08/2022</td>
              </TableRow>
              <TableRow variant="removal">
                <td>Desenvolvimento Website</td>
                <td>R$ 11.000,00</td>
                <td>Venda</td>
                <td>01/05/2022</td>
              </TableRow>
              <TableRow variant="receipt">
                <td>Desenvolvimento Website</td>
                <td>R$ 1.000,00</td>
                <td>Venda</td>
                <td>29/12/2021</td>
              </TableRow>
            </tbody>
          </table>
        </TransactionsTable>
      </Transactions>
    </HomeContainer>
  )
}
