import type { Hero, Publisher } from '../../constants'
import { heroes } from '../data/heroes'

export default async function getHeroesByPubliser (publisher: Publisher): Promise<Hero[]> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const toReturn = (heroes as Hero[]).filter(hero => hero.publisher === publisher)
      resolve(toReturn)
    }, 2000)
  })
}
