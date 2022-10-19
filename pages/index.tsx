import { Button, Stack } from '@mantine/core'
import { Layout } from '../components/Layout'
import SingIn from '../components/SignIn'

import { useAuth } from '../context/AuthContext'


const Home = () => {
  return (<Layout>
    <Stack>
      <h1>Desde inicio</h1>
    </Stack>
  </Layout>)
}
export default Home