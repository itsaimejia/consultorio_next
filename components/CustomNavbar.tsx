import { useRouter } from 'next/router'
import { Navbar, NavLink } from '@mantine/core'
import { IconLayoutDashboard, IconClock, IconCalculator } from '@tabler/icons'



const CustomNavbar = () => {
    const router = useRouter()
    return (

        <Navbar width={{ base: 250 }}>
            <NavLink label="Inicio" icon={<IconLayoutDashboard />} color="pink" onClick={() => router.push('/')} active={router.pathname === '/'} />
            <NavLink label="IMC" icon={<IconClock />} color="pink" onClick={() => router.push('/imc')} active={router.pathname === '/imc'} />
            <NavLink label="Cálculo Dietético" icon={<IconCalculator />} color="pink" onClick={() => router.push('/calculo')} active={router.pathname === '/calculo'} />
        </Navbar>
    )
}

export default CustomNavbar