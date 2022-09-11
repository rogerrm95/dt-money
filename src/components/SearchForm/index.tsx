// Libs //
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
// Icons //
import { MagnifyingGlass } from 'phosphor-react'
// Styles //
import { SearchFormContainer } from './styles'
import { useTransaction } from '../../hooks/useTransaction'
import { memo } from 'react'

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

/** Sobre o uso do MEMO
 *
 * Por que que um componente renderiza ?
 * - Hooks changed (mudou estado, contexto, reducer);
 * - Props changed (mudou propriedades);
 * - Parent rerendered (componente pai renderizou);
 *
 * Qual o fluxo de renderização ?
 * 1. O React recria o HTML da interface daquele component
 * 2. Compara a versão do HTML recriada com a versão anterior
 * 3. SE mudou alguma coisa, ele reescreve o HTML na tela
 *
 * Memo: Adiciona um passo a mais antes do fluxo acima
 * 0. Hooks changed, Props changed (deep comparison)
 * 0.1 Comparar com a versão anterior dos hooks e props
 * 0.2 SE mudou algo, ele irá permitir a nova renderização...
 */
