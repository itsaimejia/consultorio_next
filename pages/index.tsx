import { Button, Stack } from '@mantine/core'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'


const Home = () => {
  const { user } = useAuth()
  console.log(user)
  return <>
    {user ? (<Stack>
      <h1>Desde inicio</h1>
    </Stack>) : (
      <Login />
    )}
  </>
}

export default Home