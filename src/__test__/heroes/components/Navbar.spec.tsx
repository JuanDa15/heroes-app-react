import { AuthContext } from '../../../auth/context/AuthContext'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../../router/AppRouter'
import { fireEvent, render, screen } from '@testing-library/react'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Test for <Navbar />', () => {
  const logOutFn = jest.fn()
  const contextValue = {
    authState: {
      logged: true,
      name: 'Juan'
    },
    onLogIn: () => {},
    onLogOut: logOutFn
  }

  beforeEach(() => jest.clearAllMocks())

  test('Should render Name if logged', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Juan')).toBeTruthy()
  })

  test('Should render Name if logged', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn: HTMLButtonElement = screen.getByTestId('logout-button')

    fireEvent(logoutBtn, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))

    expect(logOutFn).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
