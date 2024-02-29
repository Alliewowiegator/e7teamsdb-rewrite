import {
    Alert,
    Grid, MultiSelect, Paper,
} from '@mantine/core';
import CompPreview from "@/components/CompPreview";
import type {InferGetServerSidePropsType, GetServerSideProps} from 'next'
import clientPromise from "@/utility/mongodb";
import {allHeroInfo} from "@/data/heroData";
import {useEffect, useState} from "react";
const utilityData = require('../utility/utility');
import {IconInfoCircle} from '@tabler/icons-react';


export const getServerSideProps = (async () => {
    try {
        const client = await clientPromise;
        const db = client.db('e7teamsdb');
        const teamCompositions = await db
            .collection("compositions")
            .find({})
            .toArray()

        return {props: {teamComp: JSON.parse(JSON.stringify(teamCompositions))}}
    } catch (e) {
        // TODO: add UI error communication
        console.error(e)
    }
})

export default function All({teamComp}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [filterContent, setFilterContent] = useState<string[]>([]);
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [filterHeroes, setFilterHeroes] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>(teamComp);
    const icon = <IconInfoCircle/>;
    const filteredContent = () => {
        if (filteredData.length === 0) {
            return (
                <Grid.Col span={{base: 12, md: 12, lg: 12}}>
                    <Alert variant="light" color="violet" title="Filtering Error" icon={icon}>
                        No teams were found with your specified filters.
                    </Alert>
                </Grid.Col>
            )
        } else {
            return (
                filteredData.map((composition: any, index: number) => {
                        return (
                            <Grid.Col span={{base: 12, md: 4, lg: 3}} key={index}>
                                <CompPreview {...composition} key={index}/>
                            </Grid.Col>
                        )
                    }
                )
            )
        }
    }

    useEffect(() => {
        if (filterContent.length || filterTags.length || filterHeroes.length) {
            let filteredList = teamComp.filter((composition: any) => {
                if (filterContent.length && !filterContent.some(contentItem => composition.teamInfo.teamType.includes(contentItem))) {
                    return false;
                }

                if (filterTags.length && !filterTags.every((tag: string) => composition.teamInfo.teamTags.includes(tag))) {
                    return false;
                }

                return !(filterHeroes.length && !filterHeroes.every(filterHero =>
                    composition.heroes.some((compHero: any) => compHero.name === filterHero)));

            });

            setFilteredData(filteredList);
        }

        return () => setFilteredData(teamComp);

    }, [filterContent, filterTags, filterHeroes]);

    return (
        <Grid>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                            <MultiSelect
                                label="Filter By Content"
                                data={utilityData.teamTypes}
                                maxValues={3}
                                searchable
                                value={filterContent}
                                onChange={(event: string[]) => setFilterContent(event)}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                            <MultiSelect
                                label="Filter By Tags"
                                data={utilityData.teamTags}
                                maxValues={3}
                                searchable
                                value={filterTags}
                                onChange={(event: string[]) => setFilterTags(event)}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                            <MultiSelect
                                label="Filter By Heroes"
                                data={allHeroInfo.map(hero => hero.value)}
                                maxValues={4}
                                searchable
                                value={filterHeroes}
                                onChange={(event: string[]) => setFilterHeroes(event)}
                            />
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
                <Paper shadow="xs" withBorder p="xl">
                    <Grid>
                        {filteredContent()}
                    </Grid>
                </Paper>
            </Grid.Col>
        </Grid>
    )
}