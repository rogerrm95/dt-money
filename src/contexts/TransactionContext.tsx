import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'

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
    const response = await api.get('/transactions', {
      params: { q: query },
    })

    setTransactions(response.data)
  }

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
