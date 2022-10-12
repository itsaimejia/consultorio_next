import router, { useRouter } from 'next/router'
import { createStyles, Navbar, NavLink } from '@mantine/core'
import { IconLayoutDashboard, IconClock, IconCalculator, IconSearch } from '@tabler/icons'
import { UserButton } from './UserButton'
import { useAuth } from '../context/AuthContext'


const useStyles = createStyles((theme) => ({
    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },
    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },
}))
const CustomNavbar = () => {
    const { classes } = useStyles();
    const router = useRouter()
    const { user } = useAuth()
    return <>
        {user ? (
            <Navbar width={{ base: 250 }} p="md" >
                <Navbar.Section grow className={classes.links}>
                    <NavLink label="Inicio" icon={<IconLayoutDashboard />} color="pink" onClick={() => router.push('/')} active={router.pathname === '/'} />
                    <NavLink label="IMC" icon={<IconClock />} color="pink" onClick={() => router.push('/imc')} active={router.pathname === '/imc'} />
                    <NavLink label="Cálculo Dietético" icon={<IconCalculator />} color="pink" onClick={() => router.push('/calculo')} active={router.pathname === '/calculo'} />
                    <NavLink label="Búsqueda alimentos" icon={<IconSearch />} color="pink" onClick={() => router.push('/busqueda')} active={router.pathname === '/busqueda'} />
                </Navbar.Section>
                <Navbar.Section className={classes.footer}>
                    <UserButton
                        image="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                        name="Zempo"
                        email="itsaimejia@gmail.com"

                    />
                </Navbar.Section>
            </Navbar >
        ) : (null
        )}
    </>


}

export default CustomNavbar


