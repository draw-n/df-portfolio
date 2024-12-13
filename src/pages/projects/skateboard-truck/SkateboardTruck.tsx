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

function SkateboardTruck() {
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
                        <Title ta="center">Skateboard Truck</Title>
                        <Image
                            h="100%"
                            w="100%"
                            src="/df-portfolio/project-images/skateboard-truck/PXL_20241209_181606082.jpg"
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
                                EXAMPLE OF GENERATIVE DESIGN APPLICATION
                            </Text>
                            <ScrollArea h={350}>
                                <Text>
                                    The combination of powder bed fusion and
                                    generative design methods have allowed
                                    unique solutions to be created with load
                                    bearing and material requirements in mind. A
                                    notable example is the Airbus A320
                                    partition, which is used as a separation
                                    between the passengers’ seating and the
                                    flight attendant’s area.
                                </Text>
                                <Text>
                                    The partition was built with a few goals in
                                    mind:
                                    <List>
                                        <List.Item>
                                            Be lighter than the previous
                                            partition for the Airbus (no more
                                            than 1 inch thick)
                                        </List.Item>
                                        <List.Item>
                                            Durable enough to withstand
                                            take-offs and landings
                                        </List.Item>
                                        <List.Item>
                                            Have a cutout for wider items
                                            (carts) throughout the cabin
                                        </List.Item>
                                        <List.Item>
                                            Attach securely to the plane’s
                                            airframe in four places
                                        </List.Item>
                                    </List>
                                </Text>
                                <Text>
                                    To generate the design, they analyzed and
                                    simulated two natural growth patterns: slime
                                    mold and mammal bones. This resulted in a
                                    durable yet minimal partition able to
                                    withstand various impacts during usage;
                                    combined with a specialized metal alloy
                                    developed by Airbus, all individual pieces
                                    were 3D printed and assembled together. It
                                    is known as the largest 3D printed aircraft
                                    cabin component, and it’s much stronger and
                                    lighter than the original partition it
                                    replaced.
                                </Text>
                            </ScrollArea>
                        </Flex>
                    </Flex>
                </Grid.Col>

                <Grid.Col>
                    <Flex direction="column" gap="md" h="100%">
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            h="100%"
                            p="md"
                            gap="xs"
                        >
                            <Text className="subheading">
                                FORCES AND CONSTRAINTS
                            </Text>
                            <ScrollArea h={350}>
                                <List>
                                    <List.Item>
                                        The shearing forces pointed in
                                        horizontal directions account for the
                                        forces caused by the user (which results
                                        in steering) and the impact forces that
                                        come from crashing the skateboard or
                                        riding a curb. Initially, the impact
                                        force was calculated using kinetic
                                        energy and simplified physics principles
                                        - this resulted in a value of 4000 N.
                                        However, using this value was way too
                                        high for Fusion to generate a reasonable
                                        model, so it couldn’t converge. It also
                                        didn’t fully make sense for the
                                        skateboard truck to withstand such a
                                        high force since most of the impact
                                        would be absorbed with the contact area
                                        (aka the wheels or board itself). After
                                        some trial and error, I reduced the
                                        value to be less than 1000 N, which
                                        resulted in an outcome that looked
                                        similar to the original hanger.
                                    </List.Item>
                                    <List.Item>
                                        The shearing forces pointed in the
                                        vertical directions are meant to
                                        represent high impact forces caused by
                                        the rider jumping or crashing into the
                                        ground when performing tricks. However,
                                        like the impact forces in the horizontal
                                        directions, 4000 N was much too high for
                                        Fusion to generate a model. Therefore, I
                                        also set this value to be less than 1000
                                        N. Additionally, the weight of the rider
                                        also had to be accounted for to make
                                        sure the hanger didn’t break from the
                                        constant pressure, so I set this value
                                        to support a person at around 250 lbs.
                                    </List.Item>
                                    <List.Item>
                                        Since the motor is significantly further
                                        away from the rest of the assembly, the
                                        motor mounting plate must have the
                                        capability to fully support the motor
                                        weight. Therefore, a remote force was
                                        created for the main preserve geometry
                                        for the axle leading to the motor, and
                                        the value was calculated by using the
                                        mass given in the motor tech specs.
                                    </List.Item>
                                    <List.Item>
                                        While the motor turns, a torque is
                                        placed on the motor mount. To prevent
                                        the motor mounting plate from rotating
                                        along with the motor rotation, a moment
                                        was applied to the inner part of the
                                        motor mounting plate. It was set to the
                                        maximum torque output possible for the
                                        motor mount (retrieved from the tech
                                        specs).
                                    </List.Item>
                                    <List.Item>
                                        Structural constraints are used in
                                        Fusion to prevent free translation or
                                        rotation in any sort of direction.
                                        Therefore, I set the structural
                                        constraint to be the knob to fit in the
                                        pivot cup. While the hanger does rotate
                                        around this structure for turning, it
                                        restricts it in all other directions
                                        from moving any sort of way.
                                    </List.Item>
                                </List>
                            </ScrollArea>
                        </Flex>
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
                        <Text className="subheading">
                            INTERACTIVE FUSION MODEL (ALUMINUM)
                        </Text>
                        <AspectRatio ratio={1}>
                            <iframe
                                className="component-borders"
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a46c014056ebc250fb?mode=embed"
                            ></iframe>
                        </AspectRatio>
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
                        <Text className="subheading">
                            INTERACTIVE FUSION MODEL (NYLON)
                        </Text>
                        <AspectRatio ratio={1}>
                            <iframe
                                className="component-borders"
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a4eeb33682a4f41a60?mode=embed"
                            ></iframe>
                        </AspectRatio>
                    </Flex>
                </Grid.Col>
                <Grid.Col>
                    <Flex direction="column" gap="md" h="100%">
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            h="100%"
                            p="md"
                            gap="xs"
                        >
                            <Text className="subheading">
                                DIFFERENCE IN MATERIALS AND GENERATIVE DESIGN
                                OVERVIEW
                            </Text>
                            <Text>
                                Between the aluminum and nylon outcomes, the
                                aluminum is much lighter and streamlined
                                compared to the nylon version of the same study.
                                It also looks more similar in shape and size to
                                the original (non-generated) hanger than nylon
                                does. This difference is a byproduct of the
                                material properties; aluminum is a metal, so
                                it’s able to withstand impact forces without a
                                lot of metal required. However, since nylon is a
                                thermoplastic and it is very light, a lot more
                                material is needed to withstand the impacts
                                caused by a skateboard landing or hitting a
                                curb. Out of the two generated outcomes, the
                                aluminum version is the only viable option for
                                use on an electric skateboard because the nylon
                                result is too blocky. Additionally, the need for
                                more material resulted in the nylon generating
                                around the obstacle geometry defined around the
                                motor mount, which could interfere with mounting
                                the wheels.
                            </Text>
                            <Text>
                                Generative design is an effective method for
                                creating load bearing structures with a minimum
                                amount of material. It also allows users to
                                change smaller features relatively easily as
                                opposed to traditional modeling. However, it can
                                take significant time to define the preserve and
                                obstacle geometries as well as the load cases
                                and materials. In some cases, it may just be
                                faster to use another modeling method to
                                complete the design. Generative design is most
                                helpful for organic-like structures that don’t
                                look like traditional or rigid shapes.
                                Additionally, it is very efficient with its
                                material usage, which is helpful for
                                applications that need lighter structures like
                                the aerospace industry.
                            </Text>
                        </Flex>
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
                        <Text className="subheading">
                            FUSION RENDERING (ALUMINUM)
                        </Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/skateboard-truck/Aluminum_Truck.png"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex
                        className="panel-borders about-panel"
                        direction="column"
                        p="md"
                        h="100%"
                        gap="xs"
                        flex="1"
                    >
                        <Text className="subheading">
                            FUSION RENDERING (NYLON)
                        </Text>
                        <Image src="/df-portfolio/project-images/skateboard-truck/Nylon_Truck_png.png" />
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
                        <Text className="subheading">
                            BACK OF 3D PRINTED MODEL
                        </Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/skateboard-truck/PXL_20241209_171348954.jpg"
                            />
                        </Flex>
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
                        <Text className="subheading">
                            STEERING DEMO
                        </Text>
                        <Flex
                            w="100%"
                            flex="1"
                            justify="space-between"
                            gap="xs"
                        >
                            <Image
                                w="100%"
                                src="/df-portfolio/project-images/skateboard-truck/steering.gif"
                            />
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default SkateboardTruck;
