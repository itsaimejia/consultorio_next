import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core'
import { useAuth } from '../context/AuthContext';

const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}))

interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
}

export function UserButton({ image, name, ...others }: UserButtonProps) {
    const { user, logout } = useAuth()
    const { classes } = useStyles();

    return <UnstyledButton className={classes.user} {...others} onClick={() => { logout() }}>
        <Group>
            <Avatar src={image} radius="xl" />
            <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                    {name}
                </Text>
            </div>
        </Group>
    </UnstyledButton>
}