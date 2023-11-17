import { useEffect, useState } from 'react'
import getHeroesByPubliser from '../helpers/getHeroesByPublisher'
import HeroesList from '../components/HeroesList'

export default function Marvel (): JSX.Element {
  const [heroes, setHeroes] = useState<any[]>([])
  useEffect(() => {
    const fetch = async (): Promise<void> => {
      const data = await getHeroesByPubliser('Marvel Comics')
      setHeroes(data)
    }
    void fetch()
  }, [])
  return (
    <>
      <h1>Marvel</h1>
      <HeroesList heroes={heroes} />
    </>
  )
}
