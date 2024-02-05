import {IconLink, IconPhoto} from "@tabler/icons-react";
import {allHeroInfo} from "@/data/heroData";
import {Modal} from "@mantine/core";

export default function CompPreview(props: any) {

    function getHeroPortrait (heroName: string) {
        const hero = allHeroInfo.find(hero => hero.value === heroName);
        return hero ? hero.thumbnail : null
    }


    return (
        <Modal opened={props.opened} onClose={props.close} title={props.hero.name !== '' ? props.hero.name : 'Awaiting Selection...'} size={'lg'}>

        </Modal>
    )
}