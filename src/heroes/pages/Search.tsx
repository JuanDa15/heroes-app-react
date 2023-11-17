import { useEffect, useState } from 'react'
import Alert from '../../shared/components/Alert'
import SearchBar from '../../shared/components/Searchbar'
import HeroesList from '../components/HeroesList'
import { useLocation } from 'react-router-dom'
import getHeroesByName from '../helpers/getHeroesByName'
import { type Hero } from '../../constants'

export default function Search (): JSX.Element {
  const location = useLocation()
  const [heroes, setHeroes] = useState<Hero[]>([])

  const q = location.search.slice(location.search.lastIndexOf('=') + 1)
  const formattedQ = typeof q === 'string' ? q : ''

  useEffect(() => {
    void searchHeroes(formattedQ)
  }, [q])

  const searchHeroes = async (query: string): Promise<void> => {
    const resp = await getHeroesByName(query)
    setHeroes(resp)
  }

  const NO_RESULTS = ((heroes.length === 0) && (formattedQ.length > 0))
  const INFORMATIVE = ((heroes.length === 0) && (formattedQ.length === 0))
  return (
    <>
      {
        Boolean(formattedQ) && <h1 className="text-3xl mt-3">Search: <b>{formattedQ}</b></h1>
      }
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <SearchBar q={formattedQ}/>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {
        NO_RESULTS && (
          <Alert type='Error' data-testid="error-message">
            No results found for {formattedQ}
          </Alert>
        )
      }
      {
        INFORMATIVE && (
          <Alert type='Info' data-testid="default-message">
            Search a hero
          </Alert>
        )
      }
      <HeroesList heroes={heroes} />
    </>
  )
}
