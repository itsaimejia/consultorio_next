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

    const handleRegister = async (e: any) => {
        form.validate()
        try {
            const res = await createUser(form.values.email, form.values.password)
            console.log(res)
            router.push('/')

        } catch (err: any) {
            console.log(Object.values(err)[0])
            console.log(form.errors)
        }
    }

    const { classes } = useStyles()

    return <>
        {backToSignin ? (<SingIn />) : (<div className={classes.container}>
            <div className={classes.form}>
                <form onClick={(e) => handleRegister(e)}>
                    <Stack>
                        <Center><Title order={3} sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? 'white' : 'black',
                        })}>Crear nueva cuenta</Title></Center>
                        <Divider />
                        <Space />
                        <TextInput
                            label='Ingresa un correo'
                            withAsterisk
                            icon={<IconAt />}
                            placeholder="correo@ejemplo.com"
                            radius="xs"
                            size="md"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput label='Ingresa una contraseña' withAsterisk icon={<IconLockOpen />} radius='xs' size="md" placeholder="Contraseña" {...form.getInputProps('password')} />
                        <Space />
                        <Button color={'green'} onClick={(e) => handleRegister(e)}><Text size="sm" weight={500} >
                            Registrar
                        </Text></Button>
                        <Button type='submit' color={'red'}><Text size="sm" weight={500} onClick={() => setBackToSignin(true)}>
                            Regresar
                        </Text></Button>
                    </Stack>
                </form>

            </div>
        </div>)}
    </>
}

export default SingUp