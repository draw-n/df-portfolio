import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { AppShell, ScrollArea, Flex } from "@mantine/core";

function Shell(props: PropsWithChildren) {
    return (
        <AppShell
            navbar={{
                width: 250,
                breakpoint: 0
            }}
            
            withBorder={false}
        >
            <AppShell.Navbar>
                <AppShell.Section grow component={ScrollArea}>
                    <Flex h="100vh" direction="column" justify="center">
                        <Navbar />
                    </Flex>
                </AppShell.Section>
                <AppShell.Section></AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{props.children}</AppShell.Main>
        </AppShell>
    );
}

export default Shell;
