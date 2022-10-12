import { Header, Title } from "@mantine/core"
import { useAuth } from "../context/AuthContext"
const CustomHeader = () => {
    const { user } = useAuth()
    return <>{
        user ? (
            <Header height={55} pl="md">
                <Title>Consultorio</Title>

            </Header>
        ) : (null
        )
    } </>


}

export default CustomHeader