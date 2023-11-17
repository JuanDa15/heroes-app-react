import { useNavigate, useParams } from 'react-router-dom'
import getHeroById from '../helpers/getHeroById'
import { useEffect, useState } from 'react'
import { type Hero as type } from '../../constants'
import Loader from '../../shared/components/Loader'

export default function Hero (): JSX.Element {
  const [hero, setHero] = useState<type | null>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      if (id === undefined) {
        navigate(-1)
        return
      }
      const hero = await getHeroById(id)
      if (hero === undefined) {
        navigate(-1)
        return
      }
      setHero(hero)
    }
    void fetch()
  }, [])

  const characters = hero?.characters.split(',')

  if (hero == null) {
    return (
      <section className='grid items-center justify-center h-[calc(100vh-100px)]'>
        <Loader />
      </section>
    )
  }

  return (
    <section className='grid items-center justify-center h-[calc(100vh-100px)]'>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-8 rounded-t-lg" src={`/src/assets/heroes/${hero?.id}.jpg`} alt="product image" />
          <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{hero?.superhero}</h5>
              <ul className='my-3'>
                <li className='flex flex-row justify-between'>Publisher: <b>{hero?.publisher}</b></li>
                <li className='flex flex-row justify-between'>First appearance: <b>{hero?.first_appearance}</b></li>
              </ul>
              <div className='my-3'>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Characters</h5>
                <div>
                  {
                    characters?.map((character, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{character}</span>
                    ))
                  }
                </div>
              </div>
              <div className="flex items-center justify-end">
                  <button onClick={() => { navigate(-1) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go back</button>
              </div>
          </div>
      </div>
    </section>
  )
}
