import { useContext, type PropsWithChildren, type ReactNode } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PublicRoute ({ children }: PropsWithChildren): ReactNode {
  const { authState } = useContext(AuthContext)
  return authState.logged === false ? children : <Navigate to='/marvel' />
}
