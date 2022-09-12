import { memo } from 'react'
import { useTransaction } from '../../hooks/useTransaction'
// Libs //
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
// Icons //
import { MagnifyingGlass } from 'phosphor-react'
// Styles //
import { SearchFormContainer } from './styles'

// SCHEMA //
const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const { fetchTransactions } = useTransaction()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações..."
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass weight="bold" size={22} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
