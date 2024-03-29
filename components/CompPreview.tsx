import {
    Badge,
    Card,
    Group,
    Image,
    Text,
    Button,
    RingProgress,
    Grid,
    Avatar,
    Center,
    ThemeIcon,
    ActionIcon, Divider
} from "@mantine/core";
import {IconLink, IconPhoto} from "@tabler/icons-react";
import {allHeroInfo} from "@/data/heroData";
import CompPreviewModal from "@/components/CompPreviewModal";
import {useDisclosure} from "@mantine/hooks";


export default function CompPreview(props: any) {
    const [opened, {open, close}] = useDisclosure(false);

    function getHeroPortrait (heroName: string): string {
        const hero = allHeroInfo.find(hero => hero.value === heroName);
        return hero ? hero.thumbnail : ''
    }

    const openCompositionModal = (): void => open();

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <CompPreviewModal {...props} opened={opened} close={close}/>
            <Grid>
                <Grid.Col span={4}>
                    <Text fw={500}>{props.teamInfo.teamType}</Text>
                </Grid.Col>
                <Grid.Col span={1} offset={7}>
                    <Center>
                        <ActionIcon variant="gradient"
                                    size="sm"
                                    aria-label="copy"
                                    gradient={{from: 'grape', to: 'violet', deg: 90}}>
                            <IconLink/>
                        </ActionIcon>
                    </Center>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Divider />
                </Grid.Col>

                <Grid.Col span={12}>
                    <Center>
                        <Group preventGrowOverflow={true} grow>
                            {props.heroes.map((hero:any, index: number) => {
                               return <Avatar src={getHeroPortrait(hero.name)} size="xl" key={index} variant='outline'/>
                            })}
                        </Group>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Center>
                        <Group>
                            {props.teamInfo.teamTags.map((tag: string, index: number) => {
                                return (
                                    <Badge color="violet" radius={"sm"} key={index}>
                                        {tag}
                                    </Badge>
                                )
                            })}
                        </Group>
                    </Center>
                </Grid.Col>
            </Grid>
            <Button variant="gradient" fullWidth mt="md" radius="md"
                    onClick={() => openCompositionModal()}
                    gradient={{from: 'grape', to: 'violet', deg: 90}}>
                View Team Composition
            </Button>
        </Card>
    )
}