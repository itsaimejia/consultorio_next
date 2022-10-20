import { Button, Center, Group, Stack, TextInput, Title } from "@mantine/core"
import { randomId } from "@mantine/hooks"
import { useState } from "react"
import Image from "next/image"
import { Layout } from "../components/Layout"


const IMC = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [level, setLevel] = useState('')

    const calculateIMC = () => {
        const bmi = parseFloat(weight ?? 0) / (parseFloat(height ?? 0) ** 2)
        const lvl = bmi < 18.5 ? 'low' : bmi < 22.9 ? 'normal' : bmi < 24.9 ? 'risk to overweight' : bmi < 29.9 ? 'overweight' : 'obese';
        setLevel(lvl)
    }

    return (<Layout>
        <div style={{ maxWidth: 320, margin: 'auto' }}>
            <TextInput label="Weight" value={weight} onChange={(event) => setWeight(event.currentTarget.value)} />
            <TextInput label="Height" value={height} onChange={(event) => setHeight(event.currentTarget.value)} />

            <Group position="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() => calculateIMC()}
                >
                    Calculate BMI
                </Button>
            </Group>
            <Center><Title>{level.toUpperCase()}</Title></Center>
            <Center><Image
                width={100}
                height={300}
                src={`/${level.length === 0 ? 'null' : level}.jpg`}
                alt="BMI"
            /></Center>
        </div>
    </Layout>)
}

export default IMC