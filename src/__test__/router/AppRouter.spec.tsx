import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../auth/context/AuthContext'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'

describe('Test in AppRouter', () => {
  test('Should redirect to login without Auth', () => {
    render(
      <AuthContext.Provider value={{
        authState: {
          logged: false,
          name: ''
        }
      }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Login')).toBeTruthy()
  })
  test('Should show Marvel page with Auth', () => {
    render(
      <AuthContext.Provider value={{
        authState: {
          logged: true,
          name: 'Juan'
        }
      }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText('Marvel').length).toBeGreaterThan(0)
  })
})
