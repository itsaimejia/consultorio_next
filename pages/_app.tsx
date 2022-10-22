import { AppShell, MantineProvider } from '@mantine/core'
import CustomNavbar from '../components/CustomNavbar'
import { AppProps } from 'next/app'
import CustomHeader from '../components/CustomHeader';
import React from 'react'
import { AuthContextProvider, useAuth } from '../context/AuthContext';
import { localStorageMethods } from '../classes/localStorageMethods';

function MyApp({ Component, pageProps }: AppProps) {

  return <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>



}

export default MyApp
