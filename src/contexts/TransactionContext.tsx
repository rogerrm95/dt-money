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
  transactions: Transaction[] | []
  getAllTransactions: () => Promise<void>
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // GET - all transactions //
  async function getAllTransactions() {
    const response = await fetch('http://localhost:3334/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  return (
    <TransactionContext.Provider value={{ transactions, getAllTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
