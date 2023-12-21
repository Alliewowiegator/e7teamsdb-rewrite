import { useState } from 'react';
import {Box, Card, NavLink, Button, Group, Text, Avatar} from '@mantine/core';

export default function HeroEditPreview(props: { heroData: any }) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
                <Avatar />
                <Text size="md">{props.heroData.name}</Text>
            </Group>
            <Group>
                <Button variant={"gradient"}  mt="md" radius="md" gradient={{ from: 'violet', to: 'grape', deg: 0 }}>
                    Edit Hero
                </Button>
            </Group>
        </Card>
    )
}