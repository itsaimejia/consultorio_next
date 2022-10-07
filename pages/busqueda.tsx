import { Input, Stack, Box, Divider, Paper, Table, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React from 'react'
import { useState } from 'react';
import FoodDataDescription from '../components/FoodDataDescription';

const Busqueda = ({ data }: { data: any }) => {
    const [name, setName] = useState('')
    const [food, setFood] = useState(Object)
    const [listNames, setListNames] = useState([])
    const [openedFoodDataModal, setOpenedFoodDataModal] = useState(false)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.code)
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            setListNames(getFoodNames())
        }
    }
    const getFoodNames = () => data.filter((e: any) => e.Alimento.toLowerCase().includes(name.toLowerCase()))

    const showData = (e: any) => {
        setOpenedFoodDataModal(!openedFoodDataModal)
        setFood(e)
    }

    return (
        <Stack>
            <Input
                sx={{ minWidth: 600 }} mx="auto"
                icon={<IconSearch />}
                placeholder="Nombre de alimento"
                radius="md"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                onKeyPress={keyDownHandler}
            />
            <Divider />
            <Box sx={{ minWidth: 600 }} mx="auto" >
                <Paper radius="md" p="lg" withBorder >
                    <Table>
                        <thead>
                            <tr>
                                <th>Alimento</th>
                                <th>Ver detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listNames.map((e: any) => (
                                <tr key={e.Alimento}>
                                    <td>{e.Alimento}</td>
                                    <td><Button onClick={() => showData(e)}>Ver más</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <FoodDataDescription opened={openedFoodDataModal} setOpened={setOpenedFoodDataModal} food={food} />
                </Paper>
            </Box>
        </Stack>
    )
}

export async function getServerSideProps() {
    const url = 'https://food-4eb80-default-rtdb.firebaseio.com//SMAE.json'
    const res = await fetch(url)
    const json = await res.json()
    return {
        props: {
            data: json
        }
    }
}

export default Busqueda