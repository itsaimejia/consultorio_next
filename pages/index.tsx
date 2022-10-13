import { Button, Stack } from '@mantine/core'
import SingIn from '../components/SignIn'

import { useAuth } from '../context/AuthContext'


const Home = () => {
  const { user } = useAuth()
  console.log(user)
  return <>
    {user ? (<Stack>
      <h1>Desde inicio</h1>
    </Stack>) : (
      <SingIn />
    )}
  </>
}

export default Home