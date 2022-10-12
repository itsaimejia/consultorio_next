import { AppShell, MantineProvider } from '@mantine/core'
import CustomNavbar from '../components/CustomNavbar'
import { AppProps } from 'next/app'
import CustomHeader from '../components/CustomHeader';
import React from 'react'
import { AuthContextProvider, useAuth } from '../context/AuthContext';
import Login from '../components/Login';
import { localStorageMethods } from '../classes/localStorageMethods';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useAuth()
  return <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
    <AuthContextProvider>
      <AppShell navbar={<CustomNavbar />} header={<CustomHeader />}>
        <Component {...pageProps} />
      </AppShell>
    </AuthContextProvider>
  </MantineProvider>
}

export default MyApp
