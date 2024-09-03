import syringePumpJson from "../../../data/syringe_pump.json";
import { Table, ScrollArea} from "@mantine/core";

type SyringePumpMaterialsProps = {
    type: string;
};

function SyringePumpMaterials({ type }: SyringePumpMaterialsProps) {
    const materials = syringePumpJson.map((row) => {
        return (
            type === row.type && (
                <Table.Tr key={row.name}>
                    <Table.Td>{row.name}</Table.Td>

                    <Table.Td ta="right">{row.quantity}</Table.Td>
                </Table.Tr>
            )
        );
    });
    return (
        <ScrollArea h={300} pr="md">
            <Table.ScrollContainer minWidth={200}>
                <Table verticalSpacing="xs">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Item Name</Table.Th>
                            <Table.Th ta="right">Quantity</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{materials}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </ScrollArea>
    );
}

export default SyringePumpMaterials;
