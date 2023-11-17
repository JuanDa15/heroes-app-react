import { type PropsWithChildren, createContext, useReducer } from 'react'
import { type IAuthState, authReducer, authReducerInitialState } from './authReducer'
import { types } from '../types/types'

interface IAuthContext {
  onLogIn?: (name?: string) => void
  onLogOut?: () => void
  authState?: any
}

const init = (): IAuthState => {
  const user = localStorage.getItem('heroes-app-user')

  return {
    logged: user !== null,
    name: user !== null ? JSON.parse(user) : ''
  }
}

export const AuthContext = createContext<IAuthContext>({})

export function AuthProvider ({ children }: PropsWithChildren): JSX.Element {
  const [authState, dispatch] = useReducer(authReducer, authReducerInitialState, init)

  const onLogIn = (name = ''): void => {
    dispatch({
      type: types.login,
      payload: name
    })
    localStorage.setItem('heroes-app-user', JSON.stringify(name))
  }

  const onLogOut = (): void => {
    dispatch({
      type: types.logout,
      payload: ''
    })
    localStorage.removeItem('heroes-app-user')
  }

  return (
    <AuthContext.Provider value={{
      onLogIn,
      onLogOut,
      authState
    }}>
      {children}
    </AuthContext.Provider>
  )
}
