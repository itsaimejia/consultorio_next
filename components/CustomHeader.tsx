import { Header, Title } from "@mantine/core"
import { useAuth } from "../context/AuthContext"
const CustomHeader = () => {
    const { user } = useAuth()
    return <Header height={55} pl="md">
        <Title>Consultorio</Title>
    </Header>


}

export default CustomHeader