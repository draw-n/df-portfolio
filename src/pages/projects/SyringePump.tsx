import {
    Text,
    Code,
    Accordion,
    Button,
    Flex,
    Grid,
    ActionIcon,
    Image,
    Title,
    List,
    ScrollArea,
    AspectRatio,
} from "@mantine/core";
import { IconCode, IconDownload } from "@tabler/icons-react";
import { useState } from "react";
import codeTxt from "../../data/syringe_pump.txt";
import SyringePumpMaterials from "../../components/SyringePumpMaterials";
import SyringePumpImage from "../../assets/projects/syringe-pump.jpg";

function SyringePump() {
    const [materialsType, setMaterialsType] = useState("Off The Shelf");
    const [code, setCode] = useState<string | undefined>();
    fetch(codeTxt)
        .then((response) => response.text())
        .then((textContent) => {
            setCode(textContent);
        });

    return (
        <>
            <Grid p="xl">
                <Grid.Col span={4}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Title ta="center">SYRINGE PUMP PROJECT</Title>
                        <Image src={SyringePumpImage} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Flex direction="column" gap="md" h="100%">
                        <Flex
                            className="panel-borders about-panel"
                            justify="space-between"
                            direction="column"
                            p="md"
                            gap="xs"
                            h="40%"
                        >
                            <Text className="subheading">PURPOSE</Text>
                            <Text>
                                Syringe pumps are motor-driven devices that can
                                deliver precise and accurate amounts of fluid.
                                They are used in both medicinal and research
                                applications for accurately delivering liquids.
                            </Text>
                        </Flex>
                        <Flex
                            className="panel-borders about-panel"
                            justify="space-between"
                            direction="column"
                            p="md"
                            gap="xs"
                            h="60%"
                        >
                            <Text className="subheading">FEATURES</Text>
                        </Flex>
                    </Flex>
                </Grid.Col>
                <Grid.Col>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="sm"
                    >
                        <Flex justify="space-between">
                            <Text className="subheading">ARDUINO CODE</Text>
                            <ActionIcon
                                component="a"
                                variant="subtle"
                                color="var(--accent-secondary)"
                                target="_blank"
                                href={codeTxt}
                            >
                                <IconDownload stroke={2} />
                            </ActionIcon>
                        </Flex>
                        <Accordion>
                            <Accordion.Item
                                key="Arduino Code"
                                value="Arduino Code"
                            >
                                <Accordion.Control
                                    className="component-borders"
                                    icon={<IconCode />}
                                >
                                    View
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <Code block>{code}</Code>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        p="md"
                        gap="xs"
                    >
                        <Flex justify="space-between" align="start">
                            <Text className="subheading">
                                ITEMS AND MATERIALS
                            </Text>
                            <Flex justify="end" gap="md">
                                <Button
                                    color="var(--accent-secondary)"
                                    size="xs"
                                    className="component-borders"
                                    onClick={() =>
                                        setMaterialsType("Off The Shelf")
                                    }
                                >
                                    OFF THE SHELF
                                </Button>
                                <Button
                                    color="var(--accent-primary)"
                                    size="xs"
                                    className="component-borders"
                                    onClick={() =>
                                        setMaterialsType("3D Printed")
                                    }
                                >
                                    3D PRINTED
                                </Button>
                            </Flex>
                        </Flex>

                        <SyringePumpMaterials type={materialsType} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex
                        className="panel-borders about-panel"
                        justify="space-between"
                        direction="column"
                        h="100%"
                        p="md"
                        gap="xs"
                    >
                        <Text className="subheading">HOW TO OPERATE</Text>
                        <ScrollArea h={300}>
                            <List type="ordered">
                                <List.Item>
                                    Use the two momentary buttons to move the
                                    plunger presser far back enough for the
                                    length of the syringe with its plunger
                                    extended. Put the back part of the syringe
                                    in the slot on the back barrel stabilizer.
                                    Adjust the presser with the momentary
                                    buttons as needed.
                                </List.Item>
                                <List.Item>
                                    Advance the plunger presser until it makes
                                    contact with the syringe using the forwards
                                    and backwards buttons.
                                </List.Item>
                                <List.Item>
                                    Press both buttons simultaneously to slowly
                                    advance the plunger.
                                </List.Item>
                                <List.Item>
                                    Run tests to make sure your changes do not
                                    break the build
                                </List.Item>
                                <List.Item>
                                    Use the knob and button on the screen to set
                                    syringe size and select operation mode.
                                    There are two options for operation mode. If
                                    “ml/min” is selected, a flow rate can be
                                    specified and the toggle switch can be
                                    clicked once to start pumping and again to
                                    stop. If “ml” is selected, the amount to
                                    pump in ml can be specified and the rotary
                                    encoder button can be pressed to start
                                    pumping. The pump will stop automatically
                                    once the required volume of liquid is
                                    pumped. If the limit switch is pressed
                                    during operation, the pump will warn the
                                    user that they have run out of space. The
                                    machine will then proceed to move backward
                                    into a safe position and reset itself. There
                                    is also a small reset button on the screen
                                    that resets the program if the syringe size
                                    needs to be changed out.
                                </List.Item>
                                <List.Item>
                                    Switch out the syringe as desired
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
                                src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a4101dbfcba2fd249e?mode=embed"
                            ></iframe>
                        </AspectRatio>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default SyringePump;
