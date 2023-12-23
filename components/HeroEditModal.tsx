import {Box, Card, NavLink, Button, Group, Text, Avatar, Modal, Grid, Select, Input, Divider} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {Hero} from "@/interfaces";
import {allHeroInfo} from "@/data/heroData";
import {allArtifactInfo} from "@/data/artifactData";

export default function HeroEditModal(props: { }) {
    const [opened, {open, close}] = useDisclosure(true);
    const heroStats = {
        attack: "Attack", defense: "Defense", health: "Health", speed: "Speed",
        criticalHitChance: "Critical Hit Chance", criticalHitDamage: "Critical Hit Damage", effectiveness: "Effectiveness", effectResistance: "Effect Resistance", dualAttackChance: "Dual Attack Chance",
    }

    const imprintTypes = ['Imprint Release', 'Imprint Concentration'];
    const imprints = ["B", "A", "S", "SS", "SSS"]
    const setEffects = ["Attack Set", "Defense Set", "Health Set", "Speed Set",
        "Critical Set", "Destruction Set", "Hit Set", "Resist Set", "Lifesteal Set",
        "Counter Set", "Unity Set", "Immunity Set", "Rage Set", "Penetration Set",
        "Revenge Set", "Injury Set"
    ]

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
                        data={Array.from({ length: 6}, (v, i) => (i + 1).toString())}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        searchable
                        label={"Artifact"}
                        data={allArtifactInfo.map(artifact => artifact.value)}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Artifact Level"}
                        data={Array.from({ length: 15}, (v, i) => (i + 1).toString())}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Imprint Type"}
                        data={imprintTypes}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                    <Select
                        label={"Imprint Level"}
                        data={imprints}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                    <Select
                        label={"Set Effect One"}
                        data={setEffects}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                    <Select
                        label={"Set Effect Two"}
                        data={setEffects}
                    >
                    </Select>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                    <Select
                        label={"Set Effect Three"}
                        data={setEffects}
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