import {Card, Grid, Group, Text, Badge, Button} from "@mantine/core";

export default function Home() {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>About</Text>
          </Group>

          <Text size="sm" c="dimmed">
            Epic 7 Teams Database is a website that allows you to create or view
            team compositions submitted by other users. Submitted teams
            contain all of the heroes stats that allow you to check and
            match to your own.
          </Text>

          <Button       variant="gradient" fullWidth mt="md" radius="md"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
            Submit A New Team
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>About</Text>
          </Group>

          <Text size="sm" c="dimmed">
            Sharing and finding team compositions for certain content can be
            difficult at times. You are able to search based on content
            type, composition heroes, or stats to help condense the database
            down to what you need.
          </Text>

          <Button variant={"gradient"} fullWidth mt="md" radius="md" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
            View The Database
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Disclaimer</Text>
          </Group>

          <Text size="sm" c="dimmed">
            This website is NOT affiliated with Epic Seven or Smilegate by any means, this is a FANMADE website dedicated to the game.
          </Text>

        </Card>
      </Grid.Col>
    </Grid>
  )
}
