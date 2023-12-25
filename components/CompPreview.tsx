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
    ActionIcon
} from "@mantine/core";
import {IconLink, IconPhoto} from "@tabler/icons-react";

export default function CompPreview() {


    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Grid>
                <Grid.Col span={4}>
                    <Text fw={500}>Banshee</Text>
                </Grid.Col>
                <Grid.Col offset={7} span={1}>
                    <Center>
                        <ActionIcon variant="gradient"
                                    size="sm"
                                    aria-label="copy"
                                    gradient={{from: 'grape', to: 'violet', deg: 64}}>
                            <IconLink/>
                        </ActionIcon>
                    </Center>

                </Grid.Col>

                <Grid.Col span={12}>
                    <Center>
                        <Group>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                        </Group>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Center>
                        <Group>
                            <Badge color="purple">
                                Cleave
                            </Badge>
                            <Badge color="purple">
                                Counter
                            </Badge>
                        </Group>
                    </Center>
                </Grid.Col>
            </Grid>
            <Button variant="gradient" fullWidth mt="md" radius="md"
                    gradient={{from: 'purple', to: 'cyan', deg: 90}}>
                View Team Composition
            </Button>
        </Card>
    )
}