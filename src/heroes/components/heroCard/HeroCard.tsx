import { Link } from 'react-router-dom'
import type { Hero } from '../../../constants'
import HeroCardCharecters from './HeroCardCharacters'

interface Props {
  hero: Hero
}

export default function HeroCard ({ hero }: Props): JSX.Element {
  const imageUrl = `src/assets/heroes/${hero.id}.jpg`
  return (
    <li className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-[350px] w-full object-contain" src={imageUrl} alt={hero.superhero} />
        <div className="p-5">
            <div className='mb-2'>
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              {hero.superhero}
            </h5>
            <small className='block text-center'>
              {hero.publisher} - {hero.first_appearance}
            </small>
            </div>
            <HeroCardCharecters alter_ego={hero.alter_ego} characters={hero.characters} />
        </div>
        <div className='mt-auto mb-0 p-5'>
          <Link to={`/hero/${hero.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </Link>
        </div>
    </li>
  )
}
