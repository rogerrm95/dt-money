import { createContext, ReactNode, useState } from 'react'

interface TransactionProviderProps {
  children: ReactNode
}

type Transaction = {
  id: number
  description: string
  category: string
  price: number
  createdAt: string
  type: 'receipt' | 'removal'
}

interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // GET - Transactions //
  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3334/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
