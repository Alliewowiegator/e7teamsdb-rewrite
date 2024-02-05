import {
    Grid, MultiSelect, Paper,
} from '@mantine/core';
import CompPreview from "@/components/CompPreview";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import clientPromise from "@/utility/mongodb";
import {allHeroInfo} from "@/data/heroData";
const utilityData = require('../utility/utility');


export const getServerSideProps = (async () => {
    try {
        const client = await clientPromise;
        const db = client.db('e7teamsdb');
        const teamCompositions = await db
            .collection("compositions")
            .find({})
            .toArray()

        return { props: { teamComp: JSON.parse(JSON.stringify(teamCompositions))} }
    } catch (e) {
        // TODO add UI error communication
        console.error(e)
    }
})

export default function All({teamComp}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <Grid>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        <Grid.Col span={4}>
                            <MultiSelect
                                label="Filter By Content Type"
                                data={utilityData.teamTypes}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <MultiSelect
                                label="Filter By Tags"
                                data={utilityData.teamTags}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <MultiSelect
                                label="Filter By Heroes"
                                data={allHeroInfo.map(hero => hero.value)}
                            />
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        {teamComp.map((composition: any, index: number) => {
                            return (
                                <Grid.Col span={{base: 12, md: 4, lg: 3}} key={index}>
                                    <CompPreview {...composition} key={index} />
                                </Grid.Col>
                            )
                        })}
                    </Grid>
                </Paper>
            </Grid.Col>
        </Grid>
    )
}