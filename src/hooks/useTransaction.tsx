import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionContext'

export const useTransaction = () => {
  return useContextSelector(TransactionContext, (context) => {
    return {
      ...context,
    }
  })
}
