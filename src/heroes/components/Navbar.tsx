import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

const Routes = [
  {
    to: '/marvel',
    text: 'Marvel'
  },
  {
    to: '/dc',
    text: 'DC'
  },
  {
    to: '/search',
    text: 'Search'
  }
]

export default function Navbar (): JSX.Element {
  const navigate = useNavigate()
  const { authState, onLogOut } = useContext(AuthContext)

  const onLogout = (): void => {
    navigate('/login', {
      replace: true
    });
    (onLogOut !== undefined) && onLogOut()
  }

  return (
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:flex  flex-row gap-4 items-center justify-between" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {
            Routes.map((route, key) => (
              <li key={key}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white ${isActive && 'md:text-blue-700 md:dark:text-blue-500'}`}
                >
                  {route.text}
                </NavLink>
              </li>
            ))
          }
          </ul>
          <div className='flex flex-row items-center gap-4'>
            <span>{authState?.name}</span>
            <button
              type='button'
              className='px-4 py-1 border-white border-2 rounded-md'
              onClick={onLogout}
              data-testid='logout-button'
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
