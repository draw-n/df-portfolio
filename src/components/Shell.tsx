import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { AppShell, ScrollArea, Flex, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Shell(props: PropsWithChildren) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: { base: 60, md: 0 } }}
            navbar={{
                width: 250,
                breakpoint: "md",
                collapsed: { mobile: !opened },
            }}
            withBorder={false}
        >
            <AppShell.Header>
                <Flex w="100%" px="xl" py="xs">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="md"
                        size="md"
                    />
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar
                bg={{
                    base: "var(--navbar-mobile-background)",
                    md: "var(--background-main)",
                }}
                pr={{ base: "xl", md: 0 }}
            >
                <AppShell.Section grow component={ScrollArea}>
                    <Flex
                        h="100vh"
                        direction="column"
                        align="stretch"
                        justify="center"
                    >
                        <Navbar />
                    </Flex>
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{props.children}</AppShell.Main>
        </AppShell>
    );
}

export default Shell;
