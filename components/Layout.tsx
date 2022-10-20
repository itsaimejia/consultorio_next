import { MantineProvider, AppShell } from "@mantine/core"
import { Sign } from "crypto";
import { AuthContextProvider, useAuth } from '../context/AuthContext';
import CustomHeader from "./CustomHeader"
import CustomNavbar from "./CustomNavbar"
import SingIn from './SignIn';


export const Layout = ({ children }: { children: any }) => {

    const { user } = useAuth()
    return <>
        {user ? (<AppShell  header={<CustomHeader user={{name:user.email,image:""}} />}>
            {children}
        </AppShell>) : (<SingIn />)}
    </>


}