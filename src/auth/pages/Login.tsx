import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login (): JSX.Element {
  const navigate = useNavigate()
  const { onLogIn } = useContext(AuthContext)

  const handleLogin = (): void => {
    const lastPath = localStorage.getItem('lastPath') ?? '/';
    (onLogIn !== undefined) && onLogIn('Juan David')
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1>Login</h1>
      <hr />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleLogin}
      >
        LogIn
      </button>
    </section>
  )
}
