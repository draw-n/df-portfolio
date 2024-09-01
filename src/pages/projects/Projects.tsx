import { useNavigate } from "react-router-dom";
import { Grid, Flex, Image, Text, Button, Title } from "@mantine/core";
import projectsJson from "../../data/projects.json";
function Projects() {
    const navigate = useNavigate();
    const projects = projectsJson.map((project) => {
        return (
            <Grid.Col span={4}>
                <Flex
                    className="panel-borders about-panel"
                    justify="space-between"
                    direction="column"
                    p="md"
                    gap="xs"
                    h="100%"
                >
                    <Text className="subheading">{project.name}</Text>
                    <Image src={project.image_src} />

                    <Text>{project.description}</Text>
                    <Button onClick={() => navigate(project.page_src)}>
                        View
                    </Button>
                </Flex>
            </Grid.Col>
        );
    });
    return (
        <>
            <Flex mx="xl" top="0" justify="center" className="heading-panel">
                <Title>Projects</Title>
            </Flex>

            <Grid p="xl" gutter="md">
                {projects}
            </Grid>
        </>
    );
}

export default Projects;
