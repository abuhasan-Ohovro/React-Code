
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-orange py-4'>I will be a Millionaire before 2030</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
