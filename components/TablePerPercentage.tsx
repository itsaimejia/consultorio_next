import { Box, Center, Divider, Input, NumberInput, Paper, Space, Stack, Table, Text } from '@mantine/core'
import { useState } from 'react';
import { getGET } from '../values/formulas';


const TablePerPercentage = ({ sex, weight, height, age, factor, formula }: { sex: any, weight: any, height: any, age: any, factor: any, formula: any }) => {
    const [percentageProtein, setPercentageProtein] = useState(1)
    const [percentageLipids, setPercentageLipids] = useState(1)

    /**
   * `kc()` returns the total calories, `kcProtein()` returns the calories from protein, `kcLipids()`
   * returns the calories from lipids, and `kcCarbohydrates()` returns the calories from
   * carbohydrates
   */

    const kc = () => getGET({ factor, sex, weight, height, age, formula })
    const kcProtein = () => kc() * percentageProtein / 100
    const kcLipids = () => kc() * percentageLipids / 100
    const kcCarbohydrates = () => kc() * percentageCarbohydrates() / 100
    /**
   * "If the percentage of protein is greater than 98, then set the percentage of protein to 98,
   * otherwise set the percentage of protein to the percentage of protein. If the percentage of
   * lipids is greater than 98, then set the percentage of lipids to 98, otherwise set the percentage
   * of lipids to the percentage of lipids. Return 100 minus the percentage of protein plus the
   * percentage of lipids."
   * 
   * I'm not sure what the point of this function is. It seems to be a convoluted way of saying "If
   * the percentage of protein is greater than 98, then set the percentage of protein to 98. If the
   * percentage of lipids is greater than 98, then set the percentage of lipids to 98. Return 100
   * minus the percentage of protein plus the percentage of lipids."
   * @returns The percentage of carbohydrates in the food.
   */
    const percentageCarbohydrates = () => {
        const perProtein = percentageProtein > 98 ? 98 : percentageProtein
        const perLipids = percentageLipids > 98 ? 98 : percentageLipids
        return 100 - (perProtein + perLipids)
    }
    const sumPercentage = () => percentageProtein + percentageLipids + percentageCarbohydrates()

    const showValue = (f: any) => sumPercentage() === 100 ? f.toFixed(2) : '---'

    return (
        <Stack>
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
                                    variant="filled" sx={{ maxWidth: 60 }}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    max={98 - percentageLipids + percentageCarbohydrates()}
                                    step={1}
                                    onChange={(val: any) => {
                                        setPercentageProtein(val)
                                    }} /></td>
                                <td><Text sx={{ maxWidth: 50 }}>{showValue(kcProtein())}</Text></td>
                                <td><Text sx={{ maxWidth: 50 }}>{showValue(kcProtein() / 4)}</Text></td>
                                <td><Text sx={{ maxWidth: 50 }}>{showValue(kcProtein() / 4 / weight)}</Text></td>
                            </tr>
                            <tr>
                                <td>Lípidos</td>
                                <td><NumberInput value={percentageLipids} min={1}
                                    variant="filled" sx={{ maxWidth: 60 }}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    max={98 - percentageProtein + percentageCarbohydrates()}
                                    step={1}
                                    onChange={(val: any) => {
                                        setPercentageLipids(val)
                                    }} /></td>
                                <td>{showValue(kcLipids())}</td>
                                <td>{showValue(kcLipids() / 9)}</td>
                                <td>{showValue(kcLipids() / 9 / weight)}</td>
                            </tr>
                            <tr>
                                <td>Carbohidratos</td>
                                <td><Center>{percentageCarbohydrates()}</Center></td>
                                <td>{showValue(kcCarbohydrates())}</td>
                                <td>{showValue(kcCarbohydrates() / 4)}</td>
                                <td>{showValue(kcCarbohydrates() / 4 / weight)}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><Center>{sumPercentage()}%</Center></td>
                                <td>{kc().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Paper>
            </Box>
            <Text color={'red'} size="sm" hidden={sumPercentage() === 100}>Ingresa el 100% de porcentaje para ver los resultados</Text>
        </Stack>
    )
}

export default TablePerPercentage