import { render, screen } from '@testing-library/react'
import PublicRoute from '../../router/PublicRoute'
import { AuthContext } from '../../auth/context/AuthContext'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Test in <PublicRoute />', () => {
  const children = <h1 data-testid="title">Public Route</h1>
  test('should render children if not auth', async () => {
    render(
      <AuthContext.Provider value={{
        authState: {
          logged: false,
          name: ''
        },
        onLogIn: () => {},
        onLogOut: () => {}
      }}>
        <PublicRoute>
          {children}
        </PublicRoute>
      </AuthContext.Provider>
    )

    const title: HTMLHeadingElement = await screen.findByTestId('title')
    expect(title.textContent).toBe('Public Route')
  })
  test('should not render children if auth', async () => {
    render(
      <AuthContext.Provider value={{
        authState: {
          logged: true,
          name: 'Juan'
        },
        onLogIn: () => {},
        onLogOut: () => {}
      }}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                {children}
              </PublicRoute>}>
            </Route>
            <Route path='marvel' element={ <h1>Marvel Page</h1>}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})
