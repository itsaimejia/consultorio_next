import { useRouter } from 'next/router'
import { Navbar, NavLink } from '@mantine/core';
import { IconLayoutDashboard, IconClock, IconCalculator, IconSearch } from '@tabler/icons'




const CustomNavbar = ({ opened }: { opened: boolean }) => {

    const router = useRouter()

    return <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} sx={{ height: '100%' }} >
        <Navbar.Section grow >
            <NavLink label="Inicio" icon={<IconLayoutDashboard />} color="pink" onClick={() => router.push('/')} active={router.pathname === '/'} />
            <NavLink label="Calculadora del IMC" icon={<IconClock />} color="pink" onClick={() => router.push('/imc')} active={router.pathname === '/imc'} />
            <NavLink label="Cálculadora" icon={<IconCalculator />} color="pink" onClick={() => router.push('/calculo')} active={router.pathname === '/calculo'} />
            <NavLink label="Búsqueda alimentos" icon={<IconSearch />} color="pink" onClick={() => router.push('/busqueda')} active={router.pathname === '/busqueda'} />

        </Navbar.Section>

    </Navbar >


}

export default CustomNavbar


