import {allHeroInfo} from "@/data/heroData";
import {Modal} from "@mantine/core";
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

export default function CompPreviewModal(props: any) {
    const keyStats = ['']

    // const displayHeroStats = (hero: any) => {
    //     return (
    //         Object.entries(hero).map(([key, value]) => {
    //             return (
    //                 <Grid.Col span={4}>
    //                     <Text >{value}</Text>
    //                 </Grid.Col>
    //             )
    //         })
    //     )
    // }
    const displayTagData = () => {
        return (
            props.teamInfo.teamTags.map((tag: any, index: number) => {
                return (
                    <Badge color="violet" radius={"sm"} key={index}>
                        {tag}
                    </Badge>
                )
            })
        )
    }
    const displayHeroData = () => {
        return (
            props.heroes.map((hero: any, index: number) => {
                return (
                    <Grid.Col span={6} key={index}>
                        <Card>
                            <Grid>
                                <Grid.Col span={9}>
                                    <Text fw={500}>{`${hero.name} +${hero.awakeningLevel}`}</Text>
                                    <Text fw={200}>{`${hero.artifact} (+${hero.artifactLevel})`}</Text>
                                    <Text fw={200}>{`${hero.imprintType} (${hero.imprintLevel})`}</Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Avatar src={getHeroPortrait(hero.name)} size='lg'/>
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <Divider/>
                                </Grid.Col>
                                {/*{ displayHeroStats(hero) }*/}

                            </Grid>
                        </Card>
                    </Grid.Col>
                )
            })
        )
    }

    function getHeroPortrait (heroName: string) {
        const hero = allHeroInfo.find(hero => hero.value === heroName);
        return hero ? hero.thumbnail : null
    }


    return (
        <Modal opened={props.opened} title={props.teamInfo.teamType} onClose={props.close}  size={'xl'} centered>
            <Grid>
                <Grid.Col span={12}>
                    <Divider />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Text ta="center">{props.teamInfo.teamDescription}</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Center>
                        <Group>
                            { displayTagData() }
                        </Group>
                    </Center>
                </Grid.Col>
                { displayHeroData() }
            </Grid>
        </Modal>
    )
}