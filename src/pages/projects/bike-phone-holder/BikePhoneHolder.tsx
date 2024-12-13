import {
    AspectRatio,
    Flex,
    Grid,
    List,
    ScrollArea,
    Text,
    Title,
    Image,
} from "@mantine/core";

function BikePhoneHolder() {
    return (
        <>
            <Grid p="xl">
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Title ta="center">Bike Phone Holder</Title>
                        <Image
                            h="100%"
                            w="100%"
                            src="/df-portfolio/project-images/bike-phone-holder/IMG_20241122_120029.jpg"
                        />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex direction="column" gap="md" h="100%">
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            h="100%"
                            p="md"
                            gap="xs"
                        >
                            <Text className="subheading">
                                ABOUT TOP DOWN MODELING
                            </Text>
                            <ScrollArea h={100}>
                                <Text>
                                    Top-down modeling is a technique for
                                    creating models with many integrated
                                    components. It is especially useful for
                                    parameterized models as changing a parameter
                                    will change multiple components at once as
                                    opposed to typical assemblies. Since the
                                    bike phone holder I designed had a lot of
                                    different parts (e.g. clamps, rotating
                                    pieces, phone grip), top-down modeling was
                                    the best approach to creating these
                                    integrated pieces.
                                </Text>
                                <Text>
                                    The design centers around the detent
                                    mechanism, which involves a rotating piece
                                    with grooves on its side to capture a ball
                                    on a spring. As the rotating piece moves,
                                    the ball compresses the spring further into
                                    a chamber until the next groove is
                                    available. I used fasteners to connect this
                                    mechanism to the handlebar clamps and the
                                    phone grip pieces.
                                </Text>
                                <Text>
                                    Materials used: TPU for the clamps and phone
                                    grips; PLA for the rotating piece and the
                                    rotating holder; Resin for the detent ball.
                                </Text>
                            </ScrollArea>
                        </Flex>
                        <Flex
                            className="panel-borders about-panel"
                            justify="space-between"
                            direction="column"
                            h="100%"
                            p="md"
                            gap="xs"
                        >
                            <Text className="subheading">ASSEMBLY PROCESS</Text>
                            <ScrollArea h={200}>
                                <List type="ordered">
                                    <List.Item>
                                        Take the bottom and top clamps and place
                                        them on the handlebars, with the flat
                                        pieces touching each other. Use the
                                        bolts and nuts to secure the two pieces
                                        with each other.
                                    </List.Item>
                                    <List.Item>
                                        Use M3 bolts to fasten the detent
                                        mechanism holder to the top clamp. Push
                                        the detent ball and the spring into the
                                        chamber; while holding onto it, slide
                                        the rotating piece into the detent
                                        holder. Use more M3 bolts to attach the
                                        lid onto the detent mechanism.
                                    </List.Item>
                                    <List.Item>
                                        Finally, use more M3 bolts to attach the
                                        phone grip component to the rotating
                                        piece from the detent mechanism. The
                                        phone grip should now be able to rotate
                                        and lock every 90 degrees of motion.
                                    </List.Item>
                                </List>
                            </ScrollArea>
                        </Flex>
                    </Flex>
                </Grid.Col>

                <Grid.Col>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">
                            INTERACTIVE FUSION MODEL
                        </Text>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                className="component-borders"
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a4cb9683f591171d33?mode=embed"
                            ></iframe>
                        </AspectRatio>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">WITH PHONE INSIDE</Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/bike-phone-holder/IMG_20241122_120025.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Flex
                        className="panel-borders about-panel"
                        direction="column"
                        p="md"
                        h="100%"
                        gap="xs"
                        flex="1"
                    >
                        <Text className="subheading">LANDSCAPE MODE</Text>
                        <Image src="/df-portfolio/project-images/bike-phone-holder/PXL_20241122_180045785.jpg" />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">PORTRAIT MODE</Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/bike-phone-holder/PXL_20241122_180107919.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default BikePhoneHolder;
