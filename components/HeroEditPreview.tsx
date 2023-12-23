
import {Box, Card, NavLink, Button, Group, Text, Avatar, ActionIcon} from '@mantine/core';
import {allHeroInfo} from "@/data/heroData";
import {IconX} from '@tabler/icons-react';

export default function HeroEditPreview(props: { heroData: any }) {

    function getHeroPortrait (heroName: string) {
        const hero = allHeroInfo.find(hero => hero.value === heroName);
        return hero ? hero.thumbnail : null
    }

    return (
        <Card shadow="sm" padding="lg" withBorder>
            <Group mt="md" mb="xs">
                <Avatar src={props.heroData.name !== '' ? getHeroPortrait(props.heroData.name) : null}/>
                <Text size="md">{props.heroData.name !== '' ? props.heroData.name : 'Awaiting Selection...'}</Text>
            </Group>
            <Group>
                <Button variant={"gradient"}  mt="md" radius="md" gradient={{ from: 'violet', to: 'grape', deg: 0 }}>
                    Edit Hero
                </Button>
                <ActionIcon variant="subtle" color="red" mt="md" radius="md" aria-label="Delete">
                    <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    )
}