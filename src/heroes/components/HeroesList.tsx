import { memo } from 'react'
import HeroCard from './heroCard/HeroCard'
import { type Hero } from '../../constants'

interface Props {
  heroes: Hero[]
}

function List ({ heroes }: Props): JSX.Element {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))
      }
    </ul>
  )
}

const HeroesList = memo(List)

export default HeroesList
