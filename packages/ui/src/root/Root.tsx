import { Outlet } from "react-router-dom";
import React from 'react';
import { AppShell, useMantineColorScheme } from "@mantine/core";
import App from "@/App";
import { NavBar } from "@/components/Navbar/Navbar";
import { AppFooter } from "@/components/Footer/Footer";

interface RootProps {
    type: 'route' | 'direct';
    children?: JSX.Element[] | JSX.Element | string;
}

export function Root({ type, children }: RootProps) {
    const mainLinks = window.web?.links || [
        { link: '/', label: 'mainpage' },
        { link: '/maintenance', label: 'maintenance' }
    ];
    return <>
        <AppShell >
            <AppShell.Header withBorder={false}>
            </AppShell.Header>
            <AppShell.Main>
                <NavBar title={''} links={mainLinks} type={type}></NavBar>
                <div style={{height: '100px'}}></div>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    </>
}