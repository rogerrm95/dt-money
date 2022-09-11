import { ReactNode, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
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

interface CreateTransactionInputs {
  description: string
  category: string
  price: number
  type: 'receipt' | 'removal'
}

interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // GET - Transactions //
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })

    setTransactions(response.data)
  }, [])

  // CREATE - New Transaction //
  const createTransaction = useCallback(
    async (data: CreateTransactionInputs) => {
      const { category, description, price, type } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(), // Gerado automaticamente pelo back-end na vida real //
      })

      setTransactions((state) => [response.data, ...state])
    },
    [], // <- Array vazio = Função nunca será recriada em memória //
  )

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
