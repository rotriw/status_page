import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import React from 'react';
import classes from './Navbar.module.css';
import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface HeadersProps {
    links: { link: string; label: string }[];
    title: string;
    type: 'route' | 'direct';
}

export function NavBar({ links, title, type }: HeadersProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const { t } = useTranslation();
    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                // event.preventDefault();
                setActive(link.link);
            }}
        >
        {t(`header.${link.label}`)}
        </NavLink>
    ));
    
    const titled = <><Text c={'rgba(70, 133, 89, 1)'} fw={800}>Rotriw Status</Text></>;
    
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Text fw={700} size='lg'> {titled} </Text>
                <Group gap={5} ml={30}>
                    {items}
                </Group>
            </Container>
        </header>
    );
}
