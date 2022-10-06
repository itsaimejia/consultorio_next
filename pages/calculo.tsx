
import { Box, Button, Center, Divider, Group, NumberInput, Paper, SegmentedControl, Space, Stack, Tabs, Text } from '@mantine/core';
import HarrisBenedictResult from '../components/HarrisBenedictResult';
import MifflinSTJeorResult from '../components/MifflinSTJeorResult';
import OMSResult from '../components/OMSResult';
import { useState } from 'react';
import ValenciaResult from '../components/ValenciaResult';
import OwenResult from '../components/OwenResult';
import { fasValues } from '../values/faValues';

const Calculo = () => {

    const [weight, setWeight] = useState(50)
    const [height, setHeight] = useState(1.5)
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('fem')

    return (
        <Stack>
            <Box sx={{ minWidth: 400 }} mx="auto">
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

                </Paper>
            </Box>
            <Center>
                <Tabs variant="outline" defaultValue="harris-benedict">
                    <Tabs.List>
                        <Tabs.Tab value="harris-benedict" >HARRIS-BENEDICT</Tabs.Tab>
                        <Tabs.Tab value="oms" >OMS</Tabs.Tab>
                        <Tabs.Tab value="owen" >OWEN</Tabs.Tab>
                        <Tabs.Tab value="valencia" >VALENCIA</Tabs.Tab>
                        <Tabs.Tab value="mifflin-st-jeor" >MIFFLIN ST-JEOR</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="harris-benedict" pt="xs">
                        <HarrisBenedictResult age={age} height={height} sex={sex} weight={weight} />
                    </Tabs.Panel>

                    <Tabs.Panel value="oms" pt="xs">
                        <OMSResult height={height} sex={sex} weight={weight} />
                    </Tabs.Panel>

                    <Tabs.Panel value="owen" pt="xs">
                        <OwenResult sex={sex} weight={weight} />
                    </Tabs.Panel>

                    <Tabs.Panel value="valencia" pt="xs">
                        <ValenciaResult age={age} sex={sex} weight={weight} />
                    </Tabs.Panel>

                    <Tabs.Panel value="mifflin-st-jeor" pt="xs">
                        <MifflinSTJeorResult age={age} height={height} sex={sex} weight={weight} />
                    </Tabs.Panel>
                </Tabs>
            </Center>
        </Stack>




    )
}

export default Calculo