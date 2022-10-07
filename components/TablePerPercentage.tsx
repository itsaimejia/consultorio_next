import { Box, Divider, Input, NumberInput, Paper, Space, Stack, Table, Text } from '@mantine/core'
import { useState } from 'react';
import { getFormula } from '../values/formulas';


const TablePerPercentage = ({ kc, weight }: { kc: any, weight: any }) => {
    const [percentageProtein, setPercentageProtein] = useState(1)
    const [percentageLipids, setPercentageLipids] = useState(1)
    const [percentageCarbohydrates, setPercentageCarbohydrates] = useState(1)
    const [sumPercentage, setSumPercentage] = useState(percentageProtein + percentageLipids + percentageCarbohydrates)

    return (
        <Stack spacing="xs">
            <Box sx={{ maxWidth: 600 }} mx="auto" >
                <Paper shadow="xs" radius="md" p="lg" withBorder>
                    <Text weight={700}>Por porcentaje</Text>
                    <Space h="xs" />
                    <Divider />
                    <Space h="sm" />
                    <Table>
                        <thead>
                            <tr>
                                <th>Macronutrientes</th>
                                <th>%</th>
                                <th>Kcal</th>
                                <th>g</th>
                                <th>g/Kg</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Proteinas</td>
                                <td><NumberInput value={percentageProtein} min={1}
                                    variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    max={100 - percentageLipids - percentageCarbohydrates}
                                    step={1}
                                    onChange={(val: any) => {
                                        setPercentageProtein(val)
                                        setSumPercentage(val + percentageLipids + percentageCarbohydrates)
                                    }} /></td>
                                <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{sumPercentage === 100 ? (kc * percentageProtein / 100).toFixed(2) : '---'}</Text></td>
                                <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{sumPercentage === 100 ? (kc * percentageProtein / 100 / 4).toFixed(2) : '---'}</Text></td>
                                <td><Text sx={{ maxWidth: 50, minWidth: 50 }}>{sumPercentage === 100 ? (kc * percentageProtein / 100 / 4 / weight).toFixed(2) : '---'}</Text></td>


                            </tr>
                            <tr>
                                <td>Lípidos</td>
                                <td><NumberInput value={percentageLipids} min={1}
                                    contentEditable={false}
                                    variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    max={100 - percentageProtein - percentageCarbohydrates}
                                    step={1}
                                    onChange={(val: any) => {
                                        setPercentageLipids(val)
                                        setSumPercentage(percentageProtein + val + percentageCarbohydrates)
                                    }} /></td>
                                <td>{sumPercentage === 100 ? (kc * percentageLipids / 100).toFixed(2) : '---'}</td>
                                <td>{sumPercentage === 100 ? (kc * percentageLipids / 100 / 9).toFixed(2) : '---'}</td>
                                <td>{sumPercentage === 100 ? (kc * percentageLipids / 100 / 9 / weight).toFixed(2) : '---'}</td>
                            </tr>
                            <tr>
                                <td>Carbohidratos</td>
                                <td><NumberInput value={percentageCarbohydrates} min={1}
                                    variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    max={100 - percentageLipids - percentageProtein}
                                    step={1}
                                    onChange={(val: any) => {
                                        setPercentageCarbohydrates(val)
                                        setSumPercentage(percentageProtein + percentageLipids + val)
                                    }} /></td>
                                <td>{sumPercentage === 100 ? (kc * percentageCarbohydrates / 100).toFixed(2) : '---'}</td>
                                <td>{sumPercentage === 100 ? (kc * percentageCarbohydrates / 100 / 4).toFixed(2) : '---'}</td>
                                <td>{sumPercentage === 100 ? (kc * percentageCarbohydrates / 100 / 4 / weight).toFixed(2) : '---'}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><Text color={(sumPercentage) === 100 ? 'black' : 'red'}>{sumPercentage}%</Text></td>
                                <td>{kc}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Paper>
            </Box>
            <Text color={'red'} size="sm" hidden={sumPercentage === 100}>Ingresa el 100% de porcentaje para ver los resultados</Text>
        </Stack>
    )
}

export default TablePerPercentage