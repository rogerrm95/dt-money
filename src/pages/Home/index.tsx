import { useEffect } from 'react'
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
import { useTransaction } from '../../hooks/useTransaction'

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
  const { transactions, getAllTransactions } = useTransaction()

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <HomeContainer>
      <Header />
      {/* Resumo das transações */}
      <Summary />

      {/* Lista de Transações */}
      <Transactions>
        <h2>
          Transações <span>4 itens</span>
        </h2>

        <SearchForm />
        {/* Listagem - Versão Mobile */}
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              name={transaction.description}
              price={transaction.price}
              category={transaction.category}
              typeTransaction={transaction.type}
              date={transaction.createdAt}
            />
          ))}
        </ul>

        {/* Listagem - Versão Desktop */}
        <TransactionsTable>
          <table>
            <tbody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} variant={transaction.type}>
                  <td>{transaction.description}</td>
                  <td>R$ {transaction.price}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </TransactionsTable>
      </Transactions>
    </HomeContainer>
  )
}
