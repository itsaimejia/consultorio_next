import { Button, Center, createStyles, Divider, Space, Stack, Title, Input, Group, Text, Anchor, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconAt, IconLockOpen, IconBrandGmail, IconBrandFacebook } from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react'
import { useAuth } from '../context/AuthContext';
import SingIn from './SignIn';
import { useState } from 'react';

const useStyles = createStyles((theme, getRef) => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
    },
    form: {
        height: 410,
        width: 400,
        backgroundColor: 'rgba(155, 150, 150, 0.13)',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        borderRadius: 10,
        backdropFilter: 'blur(10)',
        border: '2 solid rgba(255,255,255,0.1)',
        boxShadow: '0 0 40 rgba(8,7,16,0.6)',
        padding: '20px 35px'

    },
}));
const SingUp = () => {

    const router = useRouter()
    const { user, login, logout, createUser } = useAuth()
    const [backToSignin, setBackToSignin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e: any) => {
        try {
            const res = await createUser(email, password)
            console.log(res)
            router.push('/')
        } catch (err: any) {
            console.log(Object.values(err)[0])
        }
    }
    const { classes } = useStyles();
    return <>
        {backToSignin ? (<SingIn />) : (<div className={classes.container}>
            <div className={classes.form}>
                <Stack>
                    <Center><Title order={3} sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? 'white' : 'black',
                    })}>Crear nueva cuenta</Title></Center>
                    <Divider />
                    <Space />
                    <TextInput
                        onChange={(event) => setEmail(event.currentTarget.value)}
                        label='Correo'
                        withAsterisk
                        icon={<IconAt />}
                        placeholder="Correo"
                        radius="xs"
                        size="md"

                    />
                    <PasswordInput
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        label='Contraseña'
                        withAsterisk
                        icon={<IconLockOpen />} radius='xs' size="md" placeholder="Contraseña" />
                    <Space />
                    <Button color={'green'}><Text size="sm" weight={500} onClick={(e) => handleRegister(e)}>
                        Registrar
                    </Text></Button>
                    <Button color={'red'}><Text size="sm" weight={500} onClick={() => setBackToSignin(true)}>
                        Regresar
                    </Text></Button>
                </Stack>


            </div>
        </div>)}
    </>
}

export default SingUp