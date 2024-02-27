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

export default function CompPreview(props: any) {
    function getHeroPortrait (heroName: string) {
        const hero = allHeroInfo.find(hero => hero.value === heroName);
        return hero ? hero.thumbnail : null
    }


    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Grid>
                <Grid.Col span={4}>
                    <Text fw={500}>{props.teamInfo.teamType}</Text>
                </Grid.Col>
                <Grid.Col span={7}>
                    <Text fw={200}>{props.teamInfo.teamDescription}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
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
                               return <Avatar src={getHeroPortrait(hero.name)} size="xl" key={index} />
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
                    gradient={{from: 'grape', to: 'violet', deg: 90}}>
                View Team Composition
            </Button>
        </Card>
    )
}