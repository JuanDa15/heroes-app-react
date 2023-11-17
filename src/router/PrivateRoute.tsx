import { useContext, type PropsWithChildren, type ReactNode } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute ({ children }: PropsWithChildren): ReactNode {
  const { authState } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  const lasthPath = `${pathname}${search}`
  localStorage.setItem('lastPath', lasthPath)
  return authState.logged === true ? children : <Navigate to={'/login'} />
}
