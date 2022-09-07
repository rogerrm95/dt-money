import { MagnifyingGlass } from 'phosphor-react'
// Styles //
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações..." />

      <button type="submit">
        <MagnifyingGlass weight="bold" size={22} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}
