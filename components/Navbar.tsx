import { useState } from 'react';
import {IconGauge, IconDatabase, IconDatabasePlus, IconHome} from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import { usePathname } from "next/navigation";

const data = [
    { icon: IconGauge, label: 'Home', rightSection: <IconHome size="1rem" stroke={1.5} />, page: '/'},
    { icon: IconGauge, label: 'New Team', description: 'Submit a new team to DB', rightSection: <IconDatabasePlus size="1rem" stroke={1.5} />, page: '/new' },
    { icon: IconGauge, label: 'All Teams', description: 'View all submitted teams', rightSection: <IconDatabase size="1rem" stroke={1.5} />, page: '/all' },
];

export default function Navbar() {
    const [active, setActive] = useState(0);
    const items = data.map((item, index) => (
        <NavLink
            href={item.page}
            key={item.label}
            active={usePathname() === item.page}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            color="violet"
        />
    ));

    return <Box>{items}</Box>;
}