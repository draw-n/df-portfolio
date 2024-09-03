import { Flex, Title } from "@mantine/core";

type HeadingPanelProps = {
    title: string;
};

function HeadingPanel({ title }: HeadingPanelProps) {
    return (
        <Flex
            mx="xl"
            top="0"
            align="center"
            gap="md"
            justify="center"
            className="heading-panel"
        >
            {
                //<IconUser stroke={4} />
            }
            <Title className="heading">{title}</Title>
        </Flex>
    );
}

export default HeadingPanel;
