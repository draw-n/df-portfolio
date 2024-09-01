import skillsJson from "../data/skills.json";
import { Table, Rating, ScrollArea, Badge } from "@mantine/core";

function Skills() {
    const skills = skillsJson.map((row) => {
        return (
            <Table.Tr key={row.name}>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td>
                    <Badge color="var(--accent-primary)">{row.type}</Badge>
                </Table.Td>
                <Table.Td>
                    <Rating color="var(--accent-secondary)" value={row.level} fractions={2} readOnly />
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <ScrollArea h={300}>
            <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="xs">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Skill Name</Table.Th>
                            <Table.Th>Type</Table.Th>
                            <Table.Th>Proficiency</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{skills}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </ScrollArea>
    );
}

export default Skills;
