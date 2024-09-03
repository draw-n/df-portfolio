import { Title, Text, Flex, Image } from "@mantine/core";
import { ReactTyped } from "react-typed";
import HomeImage from "../../assets/IMG_20240817_084149_510.webp";

function Home() {
    return (
        <>
            <Flex
                w="100%"
                p="xl"
                justify="space-between"
                align="center"
                direction={{ base: "column", md: "row" }}
                gap="md"
            >
                <Image
                    className="panel-borders"
                    src={HomeImage}
                    w={{ base: "100%", md: "30%" }}
                />
                <Flex
                    w={{ base: "100%", md: "50%" }}
                    direction="column"
                    ta={{ base: "left", md: "right" }}
                >
                    <Title>Hi! I'm Helen, and I am a</Title>
                    <Title>
                        <ReactTyped
                            strings={[
                                "Computer Science student.",
                                "Mathematics student.",
                                "Digital Fabrication student.",
                            ]}
                            typeSpeed={50}
                            loop
                            backSpeed={50}
                            showCursor={true}
                        />
                    </Title>
                    <Text>
                        I get really excited for all things STEM, especially
                        when it comes to technology. I have had many different
                        experiences related to computer science, including
                        teaching elementary to high school students rudimentary
                        coding classes, working in research to discover new
                        topics in technology, and developing web applications to
                        benefit more people.
                    </Text>
                </Flex>
            </Flex>
        </>
    );
}

export default Home;
