import { Button, Center, Group, Stack, TextInput, Title, Text, Card, Space, Container, useMantineTheme, Grid } from "@mantine/core"
import { useState } from "react"
import Image from "next/image"
import { Layout } from "../components/Layout"



const IMC = () => {
    const theme = useMantineTheme()
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [level, setLevel] = useState('')
    const [bmi, setBmi] = useState(0)

    const calculateIMC = () => {
        const bmix = parseFloat(weight ?? 0) / (parseFloat(height ?? 0) ** 2)
        const lvl = bmix < 18.5 ? 'Bajo' : bmix < 22.9 ? 'Normal' : bmix < 24.9 ? 'Riesgo de sobre peso' : bmix < 29.9 ? 'Sobre peso' : 'Obeso';
        setLevel(lvl)
        setBmi(bmix)
    }

    return (<Layout>

        <Stack >
            <Title>Calculadora del IMC para adultos: Sistema métrico</Title>
            <Text>Esta calculadora proporciona el IMC y la correspondiente categoría de nivel de peso según el IMC. Utilícela para adultos de 20 años o más.</Text>
            <Card shadow="sm" p="lg" radius="md" withBorder sx={{ maxWidth: '600px' }}>
                <Card.Section p="xs" sx={(theme) => ({
                    width: '120%', backgroundColor: theme.colorScheme === 'dark' ? '#364FC7' : '#4DABF7'
                })}>
                    < Text weight={500} > Calculadora del IMC</Text>
                </Card.Section>

                <Grid p="xs" grow>
                    <Grid.Col span={4}>Datos</Grid.Col>
                    <Grid.Col span={4}>Resultados</Grid.Col>
                </Grid>
                <Grid p="xs" grow>
                    <Grid.Col span={4}> <Stack>
                        <TextInput label="Peso (Kgs)" value={weight} onChange={(event) => setWeight(event.currentTarget.value)} />
                        <TextInput label="Altura (Mts)" value={height} onChange={(event) => setHeight(event.currentTarget.value)} />
                        <Button
                            variant="outline"
                            onClick={() => calculateIMC()}
                        >
                            Calcular IMC
                        </Button></Stack></Grid.Col>
                    <Grid.Col span={4}> {level.length === 0 ? null : (<Stack>
                        <Text>Altura:  <Text weight={500}>{height}</Text></Text>
                        <Text>Peso <Text weight={500}>{weight}</Text></Text>
                        <Text>Tu IMC es <Text weight={500}>{bmi.toFixed(2)}</Text></Text>
                        <Text>Estás en la categoria <Text weight={500}>{level}</Text></Text>
                    </Stack>)}</Grid.Col>
                </Grid>
            </Card>


        </Stack >

    </Layout >)
}

export default IMC