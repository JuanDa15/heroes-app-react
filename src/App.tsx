import { AuthProvider } from './auth/context/AuthContext'
import AppRouter from './router/AppRouter'

function App (): JSX.Element {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

export default App
