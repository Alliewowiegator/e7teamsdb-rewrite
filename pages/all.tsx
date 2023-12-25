import {
    Grid, Paper,
} from '@mantine/core';
import CompPreview from "@/components/CompPreview";


export default function All() {

    return (
        <Grid>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        <Grid.Col span={{base: 12, md: 4, lg: 3}}>
                            <CompPreview />
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Grid.Col>
        </Grid>
    )
}