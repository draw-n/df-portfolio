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

function MultimaterialPliers() {
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
                        <Title ta="center">MULTIMATERIAL PLIERS</Title>
                        <Image
                            h="100%"
                            w="100%"
                            src="/df-portfolio/project-images/multimaterial-pliers/final-pliers.jpg"
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
                                ABOUT MULTI-MATERIAL AND PRINT-IN-PLACE
                            </Text>
                            <ScrollArea h={100}>
                                <Text>
                                    The goal of the project was to create a set
                                    of functioning pliers capable of closing
                                    when the handles are squeezed and
                                    automatically reopen when they aren't used.
                                    The pliers were created with two different
                                    types of materials: nylon for the
                                    handles/jaws and TPU for the spring to force
                                    the two jaws apart when unused.
                                </Text>
                                <Text>
                                    While I ended up printing the two materials
                                    separately, multimaterial projects typically
                                    are print-in-place models to ensure full
                                    integration of the different materials. Some
                                    mechanisms that use print-in-place methods
                                    to be fully functional include hinges,
                                    gears, and articulated figures that don't
                                    need to be manually assembled. There have
                                    even been practical print-in-place
                                    applications like 3D printing different
                                    building or car components.
                                </Text>
                                <Text>
                                    Materials that print well together for
                                    print-in-place would be those who can form
                                    bonds with each other and print in similar
                                    conditions. A great example of this is PLA
                                    and TPU since they both need similar bed
                                    temperatures and can integrate well next to
                                    each other. Additionally, materials that
                                    vary in mechanical properties from each
                                    other can result in interesting mechanisms
                                    unavailable to just one material (ex.
                                    flexible TPU and rigid PLA).
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
                            <Text className="subheading">
                                DESIGN & ITERATIVE PROCESS
                            </Text>
                            <ScrollArea h={200}>
                                <List type="ordered">
                                    <List.Item>
                                        Reference Every-day Pliers: Before any
                                        CAD happened, I found a few pliers in
                                        the lab and used a caliper to measure
                                        their dimensions. All general angles and
                                        distances were almost exactly the same,
                                        with a few small adjustments for the
                                        design I had in mind.
                                    </List.Item>
                                    <List.Item>
                                        Initial CAD and Pivot Check: I used the
                                        measurements from regular pliers to
                                        inform my initial model. It was a little
                                        difficult to figure out how the pivot
                                        joint worked with two overlapping
                                        pieces, but I took advantage of the
                                        revolute joint to verify that the jaws
                                        would intersect at the right angle. I
                                        then printed the two components with
                                        PLA, and the pivot worked! The primary
                                        issue was the pliers tended to want to
                                        deviate away from each other with
                                        excessive opening and closing, so I
                                        needed to find a way to keep them
                                        together.
                                    </List.Item>
                                    <List.Item>
                                        Flexible Component: With the rigid
                                        components working like regular pliers,
                                        I decided to work on the flexible
                                        component, which I modeled after flat
                                        springs. I used a dovetail joint to hold
                                        the flexible piece with the rigid
                                        components; however, I discovered that
                                        printing TPU with the 0.6 nozzle made
                                        the dovetail way too loose, even at
                                        small offsets. Therefore, I switched the
                                        nozzle to the 0.4 diameter, and the
                                        dovetails fit much better. I had hoped
                                        that the flexible piece would keep the
                                        entire thing together, but the pivot
                                        points were still too loose in the z
                                        direction.
                                    </List.Item>
                                    <List.Item>
                                        Issue with Pivot: Going back to the
                                        issue of the pliers coming apart at the
                                        pivot, I tried to implement a "mushroom"
                                        cap that could be squeezed to fit the
                                        hole in the other rigid plier part.
                                        However, I found that PLA was way too
                                        brittle for thinner pieces, and thicker
                                        pieces wouldn't bend when squeezed,
                                        making the fit impossible. To fix this,
                                        I printed with nylon using the SLS
                                        printer to give the pivot the ability to
                                        flex when squeezed, and it worked!
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
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a466120a3e54e371e2?mode=embed"
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
                        <Text className="subheading">PLIER SPECIFICATIONS & PRINT SETTINGS</Text>
                        <Text>
                            The jaws are about 35 mm in length and they are
                            about 25 mm apart when relaxed. Therefore, the
                            smallest dimension for any item cannot be greater
                            than 25 mm.
                        </Text>
                        <Text>
                            The jaws/handles were printed with nylon on the pSLS
                            printer. The flexible component was printed with TPU
                            filament at 230 degrees C on the Prusa.
                        </Text>
                    
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">FIRST PRINT</Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/multimaterial-pliers/PXL_20241110_194610116.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">BROKEN PIVOT PRINT</Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/multimaterial-pliers/PXL_20241110_005747014.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Flex
                        className="panel-borders about-panel"
                        direction="column"
                        p="md"
                        h="100%"
                        gap="xs"
                        flex="1"
                    >
                        <Text className="subheading">
                            DEMO OF WORKING PLIERS
                        </Text>
                        <Image src="/df-portfolio/project-images/multimaterial-pliers/working-pliers.gif" />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">FINAL WORKING PLIERS</Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/multimaterial-pliers/PXL_20241109_172619423.jpg"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default MultimaterialPliers;
