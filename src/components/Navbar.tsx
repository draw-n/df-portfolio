import { Flex, Image, NavLink, Title, ActionIcon, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../public/vite.svg";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <Flex
                direction="column"
                gap="md"
                p="md"
                className="nav-panel"
                align="center"
                justify="center"
            >
                <Image src={NavLogo} p="xl" w="150px" />
                <Title ta="center">Helen Wu</Title>
                <Group justify="space-evenly">
                    <ActionIcon
                        c="var(--accent-color)"
                        component="a"
                        href="https://github.com/draw-n"
                        variant="subtle"
                        radius="sm"
                        aria-label="Github"
                    >
                        <IconBrandGithub stroke={2} />
                    </ActionIcon>
                    <ActionIcon
                        c="var(--accent-color)"
                        component="a"
                        href="https://www.linkedin.com/in/helen-w-cs/"
                        variant="subtle"
                        radius="sm"
                        aria-label="Linkedin"
                    >
                        <IconBrandLinkedin stroke={2} />
                    </ActionIcon>
                </Group>
                <Flex
                    direction="column"
                    justify="space-between"
                    align="start"
                    w="100%"
                >
                    <NavLink
                        className="component-borders"
                        label="Home"
                        onClick={() => navigate("/df-portfolio")}
                    />
                    <NavLink
                        className="component-borders"
                        label="About"
                        onClick={() => navigate("/df-portfolio/about")}
                    />

                    <NavLink
                        className="component-borders"
                        label="Projects"
                        onClick={() => navigate("/df-portfolio/projects")}
                    ></NavLink>
                </Flex>
            </Flex>
        </>
    );
}

export default Navbar;
