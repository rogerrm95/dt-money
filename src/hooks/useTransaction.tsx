import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionContext'

export const useTransaction = () => {
  return useContext(TransactionContext)
}
