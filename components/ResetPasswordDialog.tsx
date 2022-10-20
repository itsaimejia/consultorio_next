import { Button, Center, createStyles, Divider, Space, Stack, Title, TextInput, Group, Text, Anchor, PasswordInput, Alert, Notification } from '@mantine/core'
import { IconAt, IconLockOpen, IconBrandGmail, IconBrandFacebook, IconAlertCircle } from '@tabler/icons';
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useForm } from '@mantine/form'
import router, { useRouter } from 'next/router'
import SingUp from './SignUp';
import { sendPasswordResetEmail } from 'firebase/auth';
import Email from 'next-auth/providers/email';

const useStyles = createStyles(() => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
    },
    form: {
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


const ResePasswordDialog = ({ email }: { email: string }) => {
    const router = useRouter()
    const { sendResetPassword } = useAuth()
    const { classes } = useStyles()

    const handleResetPassword = async () => {
        await sendResetPassword(email).then((res: any) => {
            console.log(res)
        }).catch((err: any) => {
            console.log(err)
        });
    }

    return <div className={classes.container}>
        <div className={classes.form}>

            <Stack>
                <Center><Title order={3} sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? 'white' : 'black',
                })}>Restablecer contraseña</Title></Center>
                <Divider />
                <Space />
                <Text>{email}</Text>
                <Space />
                <Button color={'green'} onClick={() => handleResetPassword()}><Text size="sm" weight={500}>
                    Continuar
                </Text></Button>
            </Stack>

        </div>
    </div>
}

export default ResePasswordDialog