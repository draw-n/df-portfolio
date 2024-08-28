import {
    Text,
    Badge,
    Flex,
    RingProgress,
    Grid,
    Image,
    
} from "@mantine/core";

import ProfileImage from "../../assets/Ancestry__0131.jpg";

import Skills from "../../components/Skills";
import WorkExperience from "../../components/WorkExperience";

function calculateTimeToGraduate() {
    let dateTime = new Date();
    let gradDate = new Date(2027, 4, 7);
    let startDate = new Date(2023, 8, 19);

    const totalTime = gradDate.getTime() - startDate.getTime();
    const allottedTime = gradDate.getTime() - dateTime.getTime();
    return ((totalTime - allottedTime) / totalTime) * 100;
}

function About() {
    return (
        <>
            <Grid p="xl">
                <Grid.Col span={3}>
                    <Flex
                        className="panel-borders about-panel"
                        direction="column"
                        h="100%"
                    >
                        <Image src={ProfileImage} className="panel-borders" />
                    </Flex>
                </Grid.Col>

                <Grid.Col span={9}>
                    <Flex
                        className="panel-borders about-panel"
                        p="lg"
                        direction="column"
                        h="100%"
                    >
                        <Text>OBJECTIVE</Text>
                        <Text>
                            I get really excited for all things STEM, especially
                            when it comes to technology. I have had many
                            different experiences related to computer science,
                            including teaching elementary to high school
                            students rudimentary coding classes, working in
                            research to discover new topics in technology, and
                            developing web applications to benefit more people.
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col>
                    <Flex
                        className="panel-borders about-panel"
                        h="100%"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Text>WORK EXPERIENCE</Text>
                        <WorkExperience />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="xs"
                    >
                        <Text>SCHOOL</Text>

                        <Flex justify="space-between" align="center">
                            <Flex direction="column">
                                <Text>Vanderbilt University</Text>

                                <Text>GRADUATION DATE</Text>

                                <Text>05/2027</Text>
                            </Flex>

                            <RingProgress
                                roundCaps
                                thickness={6}
                                size={175}
                                sections={[
                                    {
                                        value: calculateTimeToGraduate(),
                                        color: "var(--secondary-color)",
                                    },
                                ]}
                                label={
                                    <div>
                                        <Text ta="center" fz="lg">
                                            {calculateTimeToGraduate().toFixed(
                                                0
                                            )}
                                            %
                                        </Text>
                                        <Text ta="center" fz="xs" c="dimmed">
                                            Completed
                                        </Text>
                                    </div>
                                }
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction="column" h="100%" gap="md">
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            p="md"
                            gap="sm"
                        >
                            <Text>MAJORING</Text>
                            <Badge>COMPUTER SCIENCE</Badge>
                            <Badge>MATHEMATICS</Badge>
                        </Flex>
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            h="100%"
                            p="md"
                            gap="sm"
                        >
                            <Text>MINORING</Text>
                            <Badge>DIGITAL FABRICATION</Badge>
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex
                        className="panel-borders about-panel"
                        h="100%"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Text>PUBLICATION</Text>
                        <Text>
                            Contributing author to short paper titled "Browsing
                            without Third-Party Cookies: What Do You See?",
                            accepted to the 2024 ACM Internet Measurement
                            Conference (IMC).
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Flex
                        className="panel-borders about-panel"
                        h="100%"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Text>AWARD</Text>
                        <Text>National Merit Scholar</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Flex
                        className="panel-borders about-panel"
                        h="100%"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Text>AWARD</Text>
                        <Text>National Cyber Scholar with Honors</Text>
                    </Flex>
                </Grid.Col>

                <Grid.Col>
                    <Flex
                        className="panel-borders about-panel"
                        h="100%"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Text>SKILLS</Text>
                        <Skills />
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default About;
