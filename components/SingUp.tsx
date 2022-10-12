import { Button, Center, createStyles, Divider, Space, Stack, Title, Input, Group, Text, Anchor, PasswordInput } from '@mantine/core'
import { IconAt, IconLockOpen, IconBrandGmail, IconBrandFacebook } from '@tabler/icons';
import React from 'react'
import { useAuth } from '../context/AuthContext';

const useStyles = createStyles((theme, getRef) => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
    },
    form: {
        height: 490,
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
        padding: '50px 35px'

    },
}));
const SingUp = () => {

    const { user } = useAuth()

    console.log(user)
    const { classes } = useStyles();
    return <div className={classes.container}>
        <div className={classes.form}>
            <Stack>
                <Center><Title order={3} sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? 'white' : 'black',
                })}>Registrar</Title></Center>
                <Divider />
                <Space />
                <Text size="sm" weight={500}>
                    Correo
                </Text>
                <Input
                    icon={<IconAt />}
                    placeholder="Correo"
                    radius="xs"
                    size="md"
                />
                <Group position="apart" mb={5}>
                    <Text size="sm" weight={500}>
                        Contraseña
                    </Text>
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
                </Group>
                <PasswordInput icon={<IconLockOpen />} radius='xs' size="md" placeholder="Your password" id="your-password" />
                <Space />
                <Button color={'green'}><Text size="sm" weight={500}>
                    Ingresar
                </Text></Button>
                <Space />
                <Group position="apart" grow mb={5}>
                    <Button color={'red'} leftIcon={<IconBrandGmail />}>Gmail</Button>
                    <Button leftIcon={<IconBrandFacebook />}>Facebook</Button>
                </Group>
            </Stack>

        </div>
    </div>
}

export default SingUp