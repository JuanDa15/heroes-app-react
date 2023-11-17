import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marvel from '../pages/Marvel'
import DC from '../pages/DC'
import Search from '../pages/Search'
import Hero from '../pages/Hero'

export default function HeroesRoutes (): JSX.Element {
  return (
    <>
      <Navbar />
      <section className='max-w-screen-xl mx-auto'>
        <Routes>
          <Route path='marvel' element={<Marvel />} />
          <Route path='dc' element={<DC />} />
          <Route path='search' element={<Search />} />
          <Route path='hero/:id' element={<Hero />} />
          <Route path='*' element={<Navigate to={'/marvel'} />} />
        </Routes>
      </section>
    </>
  )
}
