import { useEffect } from 'react'
import { useTransaction } from '../../hooks/useTransaction'
// Components //
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionItem } from '../../components/TransactionItem'
// Utils //
import { dateFormatter, priceFormatter } from '../../utils/formatter'
// Styles //
import {
  HomeContainer,
  Transactions,
  TransactionsTable,
  TableRow,
} from './styles'

export function Home() {
  const { transactions, fetchTransactions } = useTransaction()

  useEffect(() => {
    fetchTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <td>
                    {transaction.type === 'removal' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </TransactionsTable>
      </Transactions>
    </HomeContainer>
  )
}
