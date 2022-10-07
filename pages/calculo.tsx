
import { Box, Button, Center, Divider, Group, NumberInput, Paper, SegmentedControl, Space, Stack, Tabs, Text } from '@mantine/core';
import HarrisBenedictResult from '../components/HarrisBenedictResult';
import MifflinSTJeorResult from '../components/MifflinSTJeorResult';
import OMSResult from '../components/OMSResult';
import { useState } from 'react';
import ValenciaResult from '../components/ValenciaResult';
import OwenResult from '../components/OwenResult';
import { fasValues } from '../values/faValues';
import { IconPercentage, IconScale, IconScaleOutline } from '@tabler/icons';
import TablePerGKg from '../components/TablePerGKg';
import TablePerPercentage from '../components/TablePerPercentage';

const Calculo = () => {

    const [weight, setWeight] = useState(50)
    const [height, setHeight] = useState(1.5)
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('fem')
    const [activityFactor, setActivityFactor] = useState('SEDENTARIO')
    const [formula, setFormula] = useState('harris-benedict')

    return (
        <Group position="center" spacing="xs" grow>
            <Box sx={{ maxWidth: 600 }} >
                <Paper shadow="xs" radius="md" p="lg" withBorder>
                    <Text weight={700}>Información</Text>
                    <Space h="xs" />
                    <Divider />
                    <Space h="sm" />
                    <Text weight={500}>Sexo:</Text>
                    <SegmentedControl
                        fullWidth
                        value={sex}
                        onChange={setSex}
                        data={[
                            { label: 'FEM', value: 'fem' },
                            { label: 'MASC', value: 'masc' },

                        ]}
                    />
                    <NumberInput label='Peso (Kgs)' value={weight} min={3}
                        stepHoldDelay={500}
                        stepHoldInterval={100}
                        onChange={(val) => setWeight(val ?? 0)} />
                    <NumberInput label='Estatura (Mts)' value={height} precision={2}
                        min={0.50}
                        step={0.01}
                        max={2.5}
                        stepHoldDelay={500}
                        stepHoldInterval={100} onChange={(val) => setHeight(val ?? 0)} />
                    <NumberInput label='Edad' stepHoldDelay={500} stepHoldInterval={100} min={18} value={age} onChange={(val) => setAge(val ?? 0)} />
                    <Text weight={500}>Factor actividad:</Text>
                    <SegmentedControl
                        fullWidth
                        value={activityFactor}
                        onChange={setActivityFactor}
                        data={[
                            { label: 'SEDENTARIO', value: 'SEDENTARIO' },
                            { label: 'LIGERO', value: 'LIGERO' },
                            { label: 'MODERADO', value: 'MODERADO' },
                            { label: 'ACTIVO', value: 'ACTIVO' },
                            { label: 'VIGOROSO', value: 'VIGOROSO' },

                        ]}
                    />
                    <Text weight={500}>Formula:</Text>
                    <SegmentedControl
                        fullWidth
                        value={formula}
                        onChange={setFormula}
                        data={[
                            { label: 'Harris-Benedict', value: 'harris-benedict' },
                            { label: 'Mifflin ST-Jeor', value: 'mifflin' },
                            { label: 'OMS', value: 'oms' },
                            { label: 'Owen', value: 'owen' },
                            { label: 'Valencia', value: 'valencia' },

                        ]}
                    />
                </Paper>
            </Box>
            <Center>
                <Tabs variant="outline" defaultValue="per-percentage">
                    <Tabs.List>
                        <Tabs.Tab value="per-percentage" icon={<IconPercentage size={14} />}>Por porcentage</Tabs.Tab>
                        <Tabs.Tab value="per-gKg" icon={<IconScaleOutline size={14} />} >Por g/Kg</Tabs.Tab>

                    </Tabs.List>

                    <Tabs.Panel value="per-percentage" pt="xs">
                        <TablePerPercentage sex={sex} weight={weight} height={height} age={age} factor={activityFactor} formula={formula} />
                    </Tabs.Panel>

                    <Tabs.Panel value="per-gKg" pt="xs">
                        <TablePerGKg />
                    </Tabs.Panel>


                </Tabs>
            </Center>
        </Group>




    )
}

export default Calculo