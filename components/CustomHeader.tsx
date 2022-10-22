import { Burger, Header, MediaQuery, Title, Text, Group, ActionIcon, Tooltip, useMantineTheme } from "@mantine/core"
import { IconBrightness, IconSettings } from "@tabler/icons"
import { useAuth } from "../context/AuthContext"
import { localStorageMethods } from "../classes/localStorageMethods"
import { useState } from 'react';
import { UserButton } from "./UserButton";
const CustomHeader = ({ opened, setOpened }: { opened: boolean, setOpened: any }) => {
    const theme = useMantineTheme()

    const { user } = useAuth()


    return <Header height={70} p="md">
        <Group position="apart" >
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: any) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Title>Consultorio</Title>
            </div>
            <Group>
                <UserButton
                    image="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    name={user.email}
                />
            </Group>
        </Group>
    </Header>


}

export default CustomHeader