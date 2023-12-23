import {Box, Card, NavLink, Button, Group, Text, Avatar, Modal, Grid, Select, Input, Divider} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {Hero} from "@/interfaces";
import {allHeroInfo} from "@/data/heroData";

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
                        searchable
                        label={"Hero"}
                        data={allHeroInfo.map(hero => hero.value)}
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
                <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                    <Divider />
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