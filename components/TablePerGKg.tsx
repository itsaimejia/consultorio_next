import { Box, Divider, Input, Paper, Space, Table, Text } from '@mantine/core'
import React from 'react'

const TablePerGKg = () => {
    return (
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

                            <td></td>
                            <td></td>
                            <td></td>
                            <td><Input variant="filled" sx={{ maxWidth: 70 }} /></td>
                        </tr>
                        <tr>
                            <td>Lipidos</td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td><Input variant="filled" sx={{ maxWidth: 70 }} /></td>
                        </tr>
                        <tr>
                            <td>Carbohidratos</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>100</td>
                            <td>188</td>
                        </tr>
                    </tbody>
                </Table>
            </Paper>
        </Box>
    )
}

export default TablePerGKg