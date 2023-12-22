import {Box, Card, NavLink, Button, Group, Text, Avatar, Modal, Grid, Select, Input} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";

export default function HeroEditModal(props: { }) {
    const [opened, {open, close}] = useDisclosure(true);
    const heroStats = {
        attack: "Attack", defense: "Defense", health: "Health", speed: "Speed",
        criticalHitChance: "Critical Hit Chance", criticalHitDamage: "Critical Hit Damage", effectiveness: "Effectiveness", effectResistance: "Effect Resistance", dualAttackChance: "Dual Attack Chance",
    }

    return (
        <Modal opened={opened} onClose={close} title={"Editing Arbiter Vildred"} size={'lg'}>
            <Grid>
                <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                    <Select
                        label={"Hero"}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                    <Select
                        label={"Awakening Level"}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Artifact"}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Artifact Level"}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Imprint Type"}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Imprint Level"}
                    >
                    </Select>
                </Grid.Col>
                {Object.entries(heroStats).map(([key, value], index) => {
                    return (
                        <Grid.Col span={{base: 12, md: 12, lg: 4}} key={index}>
                            <Input placeholder={value} />
                        </Grid.Col>
                    );
                })}
            </Grid>
       </Modal>
    )
}