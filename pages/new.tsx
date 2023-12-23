import {
    Box,
    Grid,
    NavLink,
    Button,
    Card,
    Group,
    Text,
    Paper,
    Fieldset,
    TextInput,
    Select,
    Divider,
    Modal
} from '@mantine/core';
import {useState} from 'react';
import HeroEditPreview from "@/components/HeroEditPreview";
import {Hero} from '@/interfaces'
import HeroEditModal from "@/components/HeroEditModal";

export default function New() {
    const [heroes, setHeroes] = useState([new Hero()])
    const [username, setUsername] = useState('');
    const [server, setServer] = useState('');
    const [teamType, setTeamType] = useState<string | null>('');
    const [teamDescription, setTeamDescription] = useState('');

    const removeHero = (heroToRemove: number) => setHeroes(heroes.filter((hero, index) => index !== heroToRemove));

    const teamTypes = [
        "Wyvern", "Banshee", "Golem", "Guild War Defense", "Guild War Offense",
        "Arena Defense", "RTA", "Abyss", "Adventure", "Brutal Pherus",
        "Blooming Snag Lich", "Pain Pursuer Moroi", "Hopeless Symaqus", "Destructive Gigantes", "Other",
    ];

    return (
        <Grid>
            <HeroEditModal/>
            <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>How Does This Work?</Text>
                    </Group>

                    <Text size="sm" c="dimmed">
                        The form below allows you to enter information about your team. What sort of content it is for,
                        what heroes, and allows you to personalize the stats of each individual hero. Add heroes as
                        needed.
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={12}>
                <Divider my="sm" labelPosition="center"/>
            </Grid.Col>

            <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                <Paper shadow="xs" withBorder p="xl">
                    <Fieldset legend={"Your User Information"} variant={"unstyled"}>
                        <TextInput
                            label={"Username"}
                            value={username}
                            onChange={(event) => setUsername(event.currentTarget.value)}
                        />
                        <TextInput
                            label={"Server"}
                            value={server}
                            onChange={(event) => setServer(event.currentTarget.value)}
                        />
                    </Fieldset>
                </Paper>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                <Paper shadow="xs" withBorder p="xl">
                    <Fieldset legend={"Your Team Information"} variant={"unstyled"}>
                        <TextInput
                            label={"Team Description"}
                            value={teamDescription}
                            onChange={(event) => setTeamDescription(event.currentTarget.value)}
                        />
                        <Select
                            label={"Content Type"}
                            data={teamTypes}
                            value={teamType}
                            onChange={setTeamType}
                        >
                        </Select>
                    </Fieldset>
                </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        {heroes.map((hero, index) => {
                            return (
                                <Grid.Col span={{base: 12, md: 12, lg: 3}} key={index}>
                                    <HeroEditPreview heroData={hero} index={index} removeHero={removeHero}/>
                                </Grid.Col>
                            )
                        })}
                    </Grid>
                </Paper>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 12, lg: 3}} offset={{base: 0, lg: 3}}>
                <Button variant={"gradient"}
                        fullWidth mt="md"
                        disabled={heroes.length >= 4}
                        radius="md" gradient={{from: 'purple', to: 'cyan', deg: 90}}
                        onClick={() => {
                            setHeroes((heroes) => [...heroes, new Hero()])
                        }}
                >
                    Add New Hero
                </Button>

            </Grid.Col>
            <Grid.Col span={{base: 12, md: 12, lg: 3}}>
                <Button variant={"gradient"} fullWidth mt="md" radius="md"
                        gradient={{from: 'purple', to: 'cyan', deg: 90}}>
                    Submit to Database
                </Button>
            </Grid.Col>
        </Grid>
    )
}