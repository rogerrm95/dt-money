import { useTransaction } from './useTransaction'
import { useMemo } from 'react'

export const useSummary = () => {
  const { transactions } = useTransaction()

  // Calcula os valores de ENTRADA | SAÍDA | SALDO //
  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
