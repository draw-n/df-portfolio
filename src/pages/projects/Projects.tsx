import TestImage from "../../../public/vite.svg";
import { Title, Grid, Flex, Image, Text } from "@mantine/core";

function Projects() {
    return (
        <>
            <Title>Projects</Title>
            <Grid gutter="md">
                <Grid.Col span={3}>
                    <Flex direction="column" bg="gray" p="lg" gap="sm">
                        <Image src={TestImage}/>
                        <Text>Syringe Pump</Text>
                        <Text>This is the syringe pump project.</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={3}>2</Grid.Col>

                <Grid.Col span={3}>3</Grid.Col>

                <Grid.Col span={3}>4</Grid.Col>
            </Grid>
        </>
    );
}

export default Projects;
