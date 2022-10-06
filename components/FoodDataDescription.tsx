import { Modal, Table } from "@mantine/core"
import { Food } from "../models/Food"
import { titleHeader } from '../values/header_smae';

const FoodDataDescription = ({ opened, setOpened, food }: { opened: boolean, setOpened: any, food: any }) => {

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
                        <td>{food.AzucarPorEquivalenteG}</td>
                    </tr>
                    <tr>
                        <td>Calcio mg</td>
                        <td>{food.Calciomg}</td>
                    </tr>
                    <tr>
                        <td>Cantidad</td>
                        <td>{food.Cantidad}</td>
                    </tr>
                    <tr>
                        <td>Carbohidratos</td>
                        <td>{food.Carbohidratos}</td>
                    </tr>
                    <tr>
                        <td>Categoría</td>
                        <td>{food.Categoría}</td>
                    </tr>
                </tbody>
            </Table>
        </Modal>
    )
}

export default FoodDataDescription