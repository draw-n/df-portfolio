import { Carousel } from "@mantine/carousel";
import { Flex, Text, Image, Badge } from "@mantine/core";
import workExpJson from "../data/work_experience.json";

function WorkExperience() {
    const workExp = workExpJson.map((exp) => {
        return (
            <Carousel.Slide>
                <Flex
                    direction="column"
                    h="100%"
                    gap="sm"
                    justify="space-between"
                >
                    <Flex align="start" justify="space-between">
                        <Flex direction="column" w="50%" h="100%">
                            <Text>{exp.role}</Text>
                            <Text>{exp.duration}</Text>
                            <Text>{exp.company}</Text>
                        </Flex>
                        <Image
                            src={exp.image_src}
                            maw="50%"
                            mah={100}
                            fit="contain"
                            p="xs"
                        />
                    </Flex>

                    <Text>{exp.description}</Text>
                    <Flex justify="center" gap="md">
                        {exp.skills.map((skill) => {
                            return <Badge>{skill}</Badge>;
                        })}
                    </Flex>
                </Flex>
            </Carousel.Slide>
        );
    });
    return (
        <Carousel height={275} loop>
            {workExp}
        </Carousel>
    );
}

export default WorkExperience;
