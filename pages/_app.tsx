import { AppShell, MantineProvider } from '@mantine/core'
import CustomNavbar from '../components/CustomNavbar'
import { AppProps } from 'next/app'
import CustomHeader from '../components/CustomHeader';
import React from 'react'
import { AuthContextProvider, useAuth } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
    <AuthContextProvider>
      <AppShell navbar={<CustomNavbar />} header={<CustomHeader />}>
        <Component {...pageProps} />
      </AppShell>
    </AuthContextProvider>
  </MantineProvider>
}

export default MyApp
