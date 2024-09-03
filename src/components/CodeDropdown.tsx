import { Flex, Text, ActionIcon, Accordion, Code } from "@mantine/core";
import { IconDownload, IconCode } from "@tabler/icons-react";
import { useState } from "react";

type CodeDropdownProps = {
    title: string;
    filePath: string;
};

function CodeDropdown({ title, filePath }: CodeDropdownProps) {
    const [code, setCode] = useState<string | undefined>();

    fetch(filePath)
    .then((response) => response.text())
    .then((textContent) => {
        setCode(textContent);
    });

    return (
        <>
            <Flex justify="space-between">
                <Text className="subheading">{title}</Text>
                <ActionIcon
                    component="a"
                    variant="subtle"
                    color="var(--accent-secondary)"
                    target="_blank"
                    href={filePath}
                >
                    <IconDownload stroke={2} />
                </ActionIcon>
            </Flex>
            <Accordion>
                <Accordion.Item key="Arduino Code" value="Arduino Code">
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
        </>
    );
}

export default CodeDropdown;
