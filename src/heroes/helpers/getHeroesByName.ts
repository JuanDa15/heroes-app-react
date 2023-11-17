import { type Hero } from '../../constants'
import { heroes } from '../data/heroes'

export default async function getHeroesByName (name: string): Promise<Hero[]> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const toReturn = (heroes as Hero[]).filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
      resolve(toReturn)
    }, 0)
  })
}
