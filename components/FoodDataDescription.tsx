import { Modal, Table } from "@mantine/core"

const FoodDataDescription = ({ opened, setOpened, food }: { opened: boolean, setOpened: any, food: any }) => {

    const { AzucarPorEquivalenteG, Calciomg, Cantidad, Carbohidratos, Categoría } = food
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={food.Alimento}
            withCloseButton={true}
            size="auto"
            transition="fade"
            transitionDuration={600}
            transitionTimingFunction="ease"
        >
            <Table>
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Azucar Por Equivalente G</td>
                        <td>{AzucarPorEquivalenteG}</td>
                    </tr>
                    <tr>
                        <td>Calcio mg</td>
                        <td>{Calciomg}</td>
                    </tr>
                    <tr>
                        <td>Cantidad</td>
                        <td>{Cantidad}</td>
                    </tr>
                    <tr>
                        <td>Carbohidratos</td>
                        <td>{Carbohidratos}</td>
                    </tr>
                    <tr>
                        <td>Categoría</td>
                        <td>{Categoría}</td>
                    </tr>
                </tbody>
            </Table>
        </Modal>
    )
}

export default FoodDataDescription