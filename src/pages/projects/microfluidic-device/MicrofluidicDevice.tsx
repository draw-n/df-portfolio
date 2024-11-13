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

function MicrofluidicDevice() {
    return (
        <>
            <Grid p="xl">
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Title ta="center">MICROFLUIDIC DEVICE</Title>
                        <Image src="/df-portfolio/project-images/microfluidic-device/PXL_20241024_130914450.jpg" />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Flex direction="column" gap="md" h="100%">
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            p="md"
                            gap="xs"
                            flex="1"
                        >
                            <Text className="subheading">PURPOSE</Text>
                            <Text>
                                Microfluidic (uFluidic) devices are a way of
                                working with small amounts of liquid. This is
                                particularly helpful in the medical field, where
                                a single drop of blood can be used with reagants
                                for multiple tests. To do so, the blood and the
                                reagant must be mixed homogenously for an
                                accurate test; however, that can be difficult to
                                achieve at a microscopic scale. When liquids are
                                forced through small chambers, they tend to
                                follow laminar flow and keep at the same path.
                                Therefore, a microfluidic device meant for
                                mixing must be designed in a way to encourage
                                intersections or obstacles.
                            </Text>
                        </Flex>
                    </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex
                        className="panel-borders about-panel"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">
                            PINCHED FLOW FRACTIONATION
                        </Text>
                        <Text>
                            Pinched flow fractionation (PFF) is a sorting
                            technique in microfluidic devices that takes
                            advantage of laminar flow in the channels. The fluid
                            with the different sized particles (A) flows into
                            the channel at a smaller rate than another liquid
                            (B). When both liquids approach a pinched segment,
                            the smaller particles are pushed against the wall
                            and continue to move upwards while the larger
                            particles move closer to the center of the channel.
                            Once these particles move past the pinched part,
                            they will separate due to different trajectories and
                            can flow into different channels.
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">HOW TO CREATE A MOLD</Text>
                        <ScrollArea h={250}>
                            <List type="ordered">
                                <List.Item>
                                    Print and Cure Mold: After designing the
                                    mold in a CAD software, it is printed on a
                                    resin printer. Keep in mind to not touch the
                                    inside of the mold or else the features will
                                    be warped. Ensure there is no uncured resin
                                    inside the mold. Additionally, cure the
                                    molds with a maximum time of about a minute
                                    at no heat to ensure maximum dimensional
                                    accuracy.
                                </List.Item>
                                <List.Item>
                                    Parylene Device: To ensure the acrylates
                                    from the resin model don't leach into the
                                    PDMS device and to ensure high dimensional
                                    accuracy, the mold is coated in a thin layer
                                    of parylene where the PDMS is expected to
                                    touch the mold.
                                </List.Item>
                                <List.Item>
                                    Cast PDMS: After the device is coated in
                                    parylene, PDMS is poured into the mold and
                                    put in a vacuum chamber to ensure no air
                                    bubbles form while curing. After a
                                    successful cure, the PDMS devices are
                                    removed from the molds.
                                </List.Item>
                                <List.Item>
                                    Plasma Bond Glass Slide: Once the PDMS
                                    device is removed, they are bonded to glass
                                    coverslips with a PlasmaFlo PDC-FMG plasma
                                    cleaner and sterilized before official use.
                                </List.Item>
                            </List>
                        </ScrollArea>
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
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a49af587d0b8683cd0?mode=embed"
                            ></iframe>
                        </AspectRatio>
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
                            IMAGES OF THE DEVICE CREATION
                        </Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                h={225}
                                src="/df-portfolio/project-images/microfluidic-device/PXL_20241024_130914450.jpg"
                            />
                            <Image
                                h={225}
                                src="/df-portfolio/project-images/microfluidic-device/PXL_20241024_130950408.jpg"
                            />
                            <Image
                                h={225}
                                src="/df-portfolio/project-images/microfluidic-device/PXL_20241024_131000631.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default MicrofluidicDevice;
