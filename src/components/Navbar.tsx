import { Flex, Image, NavLink, Title, ActionIcon, Group } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import NavLogo from "../../public/vite.svg";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
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
                <Title ta="center" className="nav-title">Helen Wu</Title>
                <Group justify="space-evenly">
                    <ActionIcon
                        color="var(--accent-secondary)"
                        component="a"
                        href="https://github.com/draw-n"
                        variant="subtle"
                        radius="sm"
                        aria-label="Github"
                    >
                        <IconBrandGithub stroke={2} size={60} />
                    </ActionIcon>
                    <ActionIcon
                        color="var(--accent-secondary)"
                        component="a"
                        href="https://www.linkedin.com/in/helen-w-cs/"
                        variant="subtle"
                        radius="sm"
                        aria-label="Linkedin"
                    >
                        <IconBrandLinkedin stroke={2} size={60} />
                    </ActionIcon>
                </Group>
                <Flex
                    direction="column"
                    justify="space-between"
                    align="start"
                    w="100%"
                    gap="sm"
                >
                    <NavLink
                        color="var(--accent-primary)"
                        variant="filled"
                        className="component-borders nav-link"
                        label="Home"
                        onClick={() => navigate("/")}
                        active={location.pathname === "/"}
                    />
                    <NavLink
                        color="var(--accent-primary)"
                        className="component-borders nav-link"
                        label="About"
                        variant="filled"
                        onClick={() => navigate("/about")}
                        active={location.pathname === "/about"}
                    />

                    <NavLink
                        color="var(--accent-primary)"
                        variant="filled"
                        className="component-borders nav-link"
                        label="Projects"
                        onClick={() => navigate("/projects")}
                        active={location.pathname.includes("/projects")}
                    ></NavLink>
                </Flex>
            </Flex>
        </>
    );
}

export default Navbar;
