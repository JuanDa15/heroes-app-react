import { useEffect, useState } from 'react'
import getHeroesByPubliser from '../helpers/getHeroesByPublisher'
import HeroesList from '../components/HeroesList'
import { type Hero } from '../../constants'

export default function DC (): JSX.Element {
  const [heroes, setHeroes] = useState<Hero[]>([])

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      const resp = await getHeroesByPubliser('DC Comics')
      setHeroes(resp)
    }

    void fetch()
  }, [])

  return (
    <>
      <h1>DC</h1>
      <HeroesList heroes={heroes} />
    </>
  )
}
