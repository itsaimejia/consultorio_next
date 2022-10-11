import { Button, Stack } from '@mantine/core'
import { localStorageMethods } from '../classes/localStorageMethods';

const Home = () => {

  return <Stack>
    <h1>Desde inicio</h1>
    <Button onClick={() => localStorageMethods.setItem('table_food', undefined)} />

  </Stack>
}

export default Home