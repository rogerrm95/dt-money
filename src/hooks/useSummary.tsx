import { useTransaction } from './useTransaction'

export const useSummary = () => {
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

  return summary
}
