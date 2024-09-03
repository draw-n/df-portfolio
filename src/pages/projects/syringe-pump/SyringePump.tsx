import {
    Text,
    Button,
    Flex,
    Grid,
    Image,
    Title,
    List,
    ScrollArea,
    AspectRatio,
} from "@mantine/core";
import { useState } from "react";
import SyringePumpMaterials from "./SyringePumpMaterials";
import codeTxt from "../../../data/syringe_pump.txt";
import CodeDropdown from "../../../components/CodeDropdown";
import SyringePumpImage from "../../../../public/project-images/syringe-pump/syringe-pump.jpg";

function SyringePump() {
    const [materialsType, setMaterialsType] = useState("Off The Shelf");

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
                        <Title ta="center">SYRINGE PUMP PROJECT</Title>
                        <Image src={SyringePumpImage} />
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
                                Syringe pumps are motor-driven devices that can
                                deliver precise and accurate amounts of fluid.
                                They are used in both medicinal and research
                                applications for accurately delivering liquids.
                            </Text>
                        </Flex>
                        <Flex
                            className="panel-borders about-panel"
                            direction="column"
                            p="md"
                            gap="xs"
                            flex="1"
                        >
                            <Text className="subheading">FEATURES</Text>
                            <List>
                                <List.Item>LCD Screen for selecting desired flow rates</List.Item>
                                <List.Item>Temporary buttons for adjusting the syringe</List.Item>
                                <List.Item>Toggle button for pausing the machine</List.Item>
                                <List.Item>LED to indicate machine status</List.Item>
                                <List.Item>Linear actuator component for pressing syringe plunger</List.Item>
                            </List>
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
                        <CodeDropdown title="ARDUINO CODE" filePath={codeTxt} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
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
                <Grid.Col span={{ base: 12, md: 6 }}>
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
