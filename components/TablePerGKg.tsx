import { Box, Divider, Input, NumberInput, Paper, Space, Stack, Table, Text } from '@mantine/core'
import React, { useState } from 'react'
import { getGET } from '../values/formulas'

const TablePerGKg = ({ sex, weight, height, age, factor, formula }: { sex: any, weight: any, height: any, age: any, factor: any, formula: any }) => {

    const [gKgProtein, setGKgProtein] = useState(0.1)
    const [gKgLipids, setGKgLipids] = useState(0.1)
    const kc = () => getGET({ factor, sex, weight, height, age, formula })
    const gramProtein = () => weight * gKgProtein
    const gramLipids = () => weight * gKgLipids
    const kcProtein = () => gramProtein() * 4
    const kcLipids = () => gramLipids() * 9
    const percentageProtein = () => gramProtein() * 4 / kc() * 100
    const percentageLipids = () => gramLipids() * 9 / kc() * 100
    const percentageCarbohydrates = () => 100 - (percentageProtein() + percentageLipids())
    const kcCarbohydrates = () => kc() - (kcProtein() + kcLipids())
    const verifyIsNaN = (f: any) => isNaN(f) ? '---' : f.toFixed(2)

    function verifiIsNaN(f:any){
        if(isNaN(f)){
            return '---'
        }else{
            return f.toFixed(2)
        }
    }

    return (
        <Stack>
            <Box sx={{ maxWidth: 600 }} mx="auto" >
                <Paper shadow="xs" radius="md" p="lg" withBorder>
                    <Text weight={700}>Por g/Kg</Text>
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

                                <td><Text sx={{ maxWidth: 50, minWidth: 50 }}> {verifyIsNaN(percentageProtein())} </Text></td>
                                <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{verifyIsNaN(kcProtein())}</Text></td>
                                <td> <Text sx={{ maxWidth: 100, minWidth: 100 }}>{verifyIsNaN(gramProtein())}</Text> </td>
                                <td><NumberInput variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                    value={gKgProtein}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    precision={2}
                                    min={0.01}
                                    step={0.01}
                                    onChange={(val: any) => { setGKgProtein(val) }}
                                /></td>
                            </tr>
                            <tr>
                                <td>Lipidos</td>

                                <td> {verifyIsNaN(percentageLipids())} </td>
                                <td>{verifyIsNaN(kcLipids())}</td>
                                <td> {verifyIsNaN(gramLipids())} </td>
                                <td><NumberInput variant="filled" sx={{ minWidth: 100, maxWidth: 100 }}
                                    value={gKgLipids}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    precision={2}
                                    min={0.01}
                                    step={0.01}
                                    onChange={(val: any) => { setGKgLipids(val) }}
                                /></td>
                            </tr>
                            <tr>
                                <td>Carbohidratos</td>
                                <td>{verifyIsNaN(percentageCarbohydrates())}</td>
                                <td>{verifyIsNaN(kcCarbohydrates())}</td>
                                <td>{verifyIsNaN(kcCarbohydrates() / 4)}</td>
                                <td>{verifyIsNaN(kcCarbohydrates() / 4 / weight)}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{verifyIsNaN(percentageCarbohydrates() + percentageLipids() + percentageProtein())}</td>
                                <td>{kc().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Paper>
            </Box>
        </Stack>
    )
}

export default TablePerGKg