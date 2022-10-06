import { Box, Container, Divider, Group, Paper, Space, Table, Text } from '@mantine/core'
import { fasValues } from '../values/faValues'

const TableResults = ({ title, geb, isHarris }: { title: any, geb: any, isHarris: any }) => {
    const rows = fasValues.map((value) => (
        <tr key={value.fa}>
            <td>{value.fa}</td>
            <td>{geb.toFixed(2)}</td>
            <td>{(value.value * parseFloat(geb)).toFixed(2)}</td>
            <td>{(value.value * parseFloat(geb) + (isHarris === true ? parseFloat(geb) * 0.10 : 0)).toFixed(2)}</td>
        </tr>
    ))
    return (
        <Box sx={{ maxWidth: 600 }} mx="auto" >
            <Paper shadow="xs" radius="md" p="lg" withBorder>
                <Text weight={700}>{title}</Text>
                <Space h="xs" />
                <Divider />
                <Space h="sm" />

                <Table>
                    <thead>
                        <tr>
                            <th>Factor de actividad</th>
                            <th>GEB</th>
                            <th>FA</th>
                            <th>GET</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Paper>
        </Box>
    )
}

export default TableResults