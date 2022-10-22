import { MantineProvider, AppShell, useMantineTheme, Aside, Burger, Footer, Header, MediaQuery, Navbar, Text } from "@mantine/core"
import { Sign } from "crypto";
import { AuthContextProvider, useAuth } from '../context/AuthContext';
import CustomHeader from "./CustomHeader"
import CustomNavbar from "./CustomNavbar"
import SingIn from './SignIn';
import { useState } from 'react';
import { localStorageMethods } from "../classes/localStorageMethods";

export const Layout = ({ children }: { children: any }) => {

    const { user } = useAuth()
    const [opened, setOpened] = useState(false)
    const [colorS, setColorS] = useState(localStorageMethods.getItem('theme')['color'])
    return <MantineProvider theme={{ colorScheme: colorS }} withGlobalStyles withNormalizeCSS >
        {user ? (<AppShell
            navbarOffsetBreakpoint="sm"
            navbar={<CustomNavbar opened={opened} />}
            header={<CustomHeader opened={opened} setOpened={setOpened} colorS={colorS} setColorS={setColorS} />}
        >
            {children}
        </AppShell>) : (<SingIn />)}
    </MantineProvider >


}


