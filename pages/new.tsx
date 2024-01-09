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
    Modal, MultiSelect
} from '@mantine/core';
import {useState} from 'react';
import HeroEditPreview from "@/components/HeroEditPreview";
import {Hero} from '@/interfaces'
import HeroEditModal from "@/components/HeroEditModal";
import {useDisclosure} from "@mantine/hooks";

export default function New() {
    const [heroes, setHeroes] = useState([new Hero()])
    const [username, setUsername] = useState<string>('');
    const [server, setServer] = useState<string>('');
    const [teamType, setTeamType] = useState<string | null>('');
    const [teamDescription, setTeamDescription] = useState<string>('');
    const [opened, {open, close}] = useDisclosure(false);
    const [heroToEdit, setEditHero] = useState(new Hero());
    const [editIndex, setEditIndex] = useState<number>();

    const openEdit = (heroToEdit: number) => {
        setEditIndex(heroToEdit);
        setEditHero({...heroes[heroToEdit]})
        open()
    }
    const removeHero = (heroToRemove: number) => setHeroes(heroes.filter((hero, index) => index !== heroToRemove));

    const teamTypes: string[] = [
        "Wyvern", "Banshee", "Golem", "Guild War Defense", "Guild War Offense",
        "Arena Defense", "RTA", "Abyss", "Adventure", "Brutal Pherus",
        "Blooming Snag Lich", "Pain Pursuer Moroi", "Hopeless Symaqus", "Destructive Gigantes", "Other",
    ];

    const teamTags: string[] = ['Cleave', 'Counter', 'Speed', 'Bomb Squad', 'Cleanse', 'One-Shot', 'Sustain', 'Bruiser', 'Push', 'Injury', 'Burn', 'Control'];

    return (
        <Grid>
            <HeroEditModal opened={opened} close={close} hero={heroToEdit} heroes={heroes} editIndex={editIndex} />
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

            <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                <Paper shadow="xs" withBorder p="xl">
                    <Fieldset legend={"Your Team and User Information"} variant={"unstyled"}>
                        <Grid>
                            <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                                <TextInput
                                    label={"Username"}
                                    value={username}
                                    onChange={(event) => setUsername(event.currentTarget.value)}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 12, lg: 6}}>
                                <TextInput
                                    label={"Server"}
                                    value={server}
                                    onChange={(event) => setServer(event.currentTarget.value)}
                                />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Divider my="sm" labelPosition="center" variant="dotted"/>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                                <TextInput
                                    label={"Team Description"}
                                    value={teamDescription}
                                    onChange={(event) => setTeamDescription(event.currentTarget.value)}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                                <Select
                                    label={"Content Type"}
                                    data={teamTypes}
                                    value={teamType}
                                    onChange={setTeamType}
                                />
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 12, lg: 4}}>
                                <MultiSelect
                                    label="Team Tags"
                                    placeholder="Tag"
                                    data={teamTags}
                                />
                            </Grid.Col>
                        </Grid>
                    </Fieldset>
                </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        {heroes.map((hero, index) => {
                            return (
                                <Grid.Col span={{base: 12, md: 12, lg: 3}} key={index}>
                                    <HeroEditPreview heroData={hero} index={index} removeHero={removeHero} openEdit={openEdit}/>
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