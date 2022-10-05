import { AppShell } from '@mantine/core'

import CustomNavbar from '../components/CustomNavbar'
import { AppProps } from 'next/app'
import CustomHeader from '../components/CustomHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return <AppShell navbar={<CustomNavbar />} header={<CustomHeader />}>
    <Component {...pageProps} />
  </AppShell>
}

export default MyApp
