import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../auth/context/AuthContext'
import PrivateRoute from '../../router/PrivateRoute'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Test in <PrivateRoute />', () => {
  const children = <h1>Private Route</h1>
  test('should not render children if not auth', () => {
    const contextValue = {
      logged: false,
      name: ''
    }

    render(
      <AuthContext.Provider value={{
        authState: contextValue,
        onLogIn: () => {},
        onLogOut: () => {}
      }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='login' element={<h1>Login page</h1>} />
            <Route path='/*' element={
              <PrivateRoute>
                {children}
              </PrivateRoute>
            }>
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Login page')).toBeTruthy()
  })
  test('should render children if auth', () => {
    const contextValue = {
      logged: true,
      name: 'Juan'
    }

    render(
      <AuthContext.Provider value={{
        authState: contextValue,
        onLogIn: () => {},
        onLogOut: () => {}
      }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='login' element={<h1>Login page</h1>} />
            <Route path='/*' element={
              <PrivateRoute>
                {children}
              </PrivateRoute>
            }>
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Private Route')).toBeTruthy()
  })
  test('Should call localStorage.setItem', () => {
    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      name: 'Juan'
    }

    render(
      <AuthContext.Provider value={{
        authState: contextValue,
        onLogIn: () => {},
        onLogOut: () => {}
      }}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <Routes>
            <Route path='login' element={<h1>Login page</h1>} />
            <Route path='/*' element={
              <PrivateRoute>
                {children}
              </PrivateRoute>
            }>
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')
  })
})
