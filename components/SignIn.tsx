import { Button, Center, createStyles, Divider, Space, Stack, Title, TextInput, Group, Text, Anchor, PasswordInput } from '@mantine/core'
import { IconAt, IconLockOpen, IconBrandGmail, IconBrandFacebook } from '@tabler/icons';
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useForm } from '@mantine/form'
import router, { useRouter } from 'next/router'
import SingUp from './SignUp';

const useStyles = createStyles(() => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
    },
    form: {
        height: 510,
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
}))


const SingIn = () => {
    const router = useRouter()
    const { user, login, logout } = useAuth()
    const { classes } = useStyles()
    const [register, setRegister] = useState(false)
    const [error, setError] = useState('')
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido (correo@ejemplo.com)'),
            password: (value) => (value.trim().length >= 5 ? null : 'Debe ser mayor a 5 caracteres')
        },
    });

    /**
     * 
     * @param e: event
     */
    const handleLogin = async (e: any) => {
        form.validate()
        await login(form.values.email, form.values.password).then((result: any) => {
            console.log(result)
            router.push('/')
        }).catch((err: any) => {
            console.log(err)

        });
    }

    return <>
        {register ? (<SingUp />) : (<div className={classes.container}>
            <div className={classes.form}>
                <form onClick={(e) => handleLogin(e)}>
                    <Stack>
                        <Center><Title order={3} sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? 'white' : 'black',
                        })}>Iniciar sesión</Title></Center>
                        <Divider />
                        <Space />
                        <TextInput
                            label='Ingresa tu correo'
                            withAsterisk
                            icon={<IconAt />}
                            placeholder="correo@ejemplo.com"
                            radius="xs"
                            size="md"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput label='Ingresa una contraseña' withAsterisk icon={<IconLockOpen />} radius='xs' size="md" placeholder="Contraseña" {...form.getInputProps('password')} />

                        <Space />
                        <Button color={'green'}><Text size="sm" weight={500} onClick={(e) => handleLogin(e)}>
                            Ingresar
                        </Text></Button>
                        <Group position="apart" grow mb={5}>
                            <Button disabled color={'red'} leftIcon={<IconBrandGmail />}>Gmail</Button>
                            <Button disabled leftIcon={<IconBrandFacebook />}>Facebook</Button>
                        </Group>
                        <Anchor<'a'>
                            href="#"
                            onClick={(event) => event.preventDefault()}
                            sx={(theme) => ({
                                paddingTop: 2,
                                color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                                fontWeight: 500,
                                fontSize: theme.fontSizes.xs,
                            })}>
                            ¿Olvidaste tu contraseña?
                        </Anchor>
                        <Divider />
                        <Button color={'blue'}><Text size="sm" weight={500} onClick={() => setRegister(true)}>
                            Crear nueva cuenta
                        </Text></Button>
                    </Stack>
                </form>
            </div>
        </div>)}
    </>
}

export default SingIn