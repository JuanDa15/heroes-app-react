import { type Hero } from '../../constants'
import { heroes } from '../data/heroes'

export default async function getHeroById (id: string): Promise<Hero | undefined> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const toReturn = (heroes as Hero[]).find(hero => hero.id === id)
      resolve(toReturn)
    }, 2000)
  })
}
