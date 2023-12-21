import { useState } from 'react';
import {IconGauge, IconDatabase, IconDatabasePlus, IconHome} from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import {purple} from "next/dist/lib/picocolors";
const data = [
    { icon: IconGauge, label: 'Home', rightSection: <IconHome size="1rem" stroke={1.5} />},
    { icon: IconGauge, label: 'New Team', description: 'Submit a new team to DB', rightSection: <IconDatabasePlus size="1rem" stroke={1.5} /> },
    { icon: IconGauge, label: 'All Teams', description: 'View all submitted teams', rightSection: <IconDatabase size="1rem" stroke={1.5} /> },
];

export default function Navbar() {
    const [active, setActive] = useState(0);
    // @ts-ignore
    const items = data.map((item, index) => (
        <NavLink
            href="#required-for-focus"
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            onClick={() => setActive(index)}
        />
    ));

    return <Box w={220}>{items}</Box>;
}