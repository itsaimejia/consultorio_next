import { Input, Stack, Box, Divider, Paper, Table, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useState } from 'react';
import FoodDataDescription from '../components/FoodDataDescription';
import { localStorageMethods } from '../classes/localStorageMethods';
import { Layout } from '../components/Layout';
const Busqueda = () => {
    const getDataTable = async () => {
        let json = localStorageMethods.getItem('table_food')
        if (localStorageMethods.getItem('table_food') === undefined) {
            const url = 'https://food-4eb80-default-rtdb.firebaseio.com//SMAE.json'
            const res = await fetch(url)
            json = await res.json()
            localStorageMethods.setItem('table_food', json)
        }
        localStorageMethods.setItem('table_food', json)
    }
    getDataTable()
    const data = localStorageMethods.getItem('table_food')
    const [name, setName] = useState('')
    const [food, setFood] = useState(Object)
    const [listFoods, setListFoods] = useState([])
    const [openedFoodDataModal, setOpenedFoodDataModal] = useState(false)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            if (name.trim().length > 0) {
                setListFoods(getFoodsData())
            }
        }
    }
    const getFoodsData = () => data.filter((e: any) => e.Alimento.toLowerCase().includes(name.toLowerCase()))

    const showData = (e: any) => {
        setOpenedFoodDataModal(!openedFoodDataModal)
        setFood(e)
    }

    return (
        <Layout>
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
                                {listFoods.map((e: any) => (
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
        </Layout>
    )
}

export default Busqueda