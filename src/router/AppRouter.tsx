import HeroesRoutes from '../heroes/routes/Heroes.routes'
import Login from './../auth/pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
        {/* De este modo podemos crear un modulo en el que todas las rutas esten protegidas */}
        <Route path='login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/' element={<Login />}/>
              {/* <Route path='/efpef' element={<Login />}/> */}
              {/* <Route path='/rgdg' element={<Login />}/> */}
            </Routes>
          </PublicRoute>
        } />
        <Route path='*' element={<Navigate to={'/marvel'} />} />
      </Routes>
    </>
  )
}
