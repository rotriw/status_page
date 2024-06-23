import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import React from 'react';
import { Root } from './root/Root';
import { Welcome } from './components/Welcome/Welcome';
import { LoginPage } from './pages/Login.page';
import { Space, useMantineColorScheme } from '@mantine/core';
import { AppFooter } from './components/Footer/Footer';
import { MaintenancePage } from './pages/Maintenance.page';
import { MaintenanceReport } from './pages/MaintenanceReport.page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root type='route' />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },

            {
                path: '/maintenance',
                element: <MaintenancePage />
            },

            {
                path: '/maintenance/:id',
                element: <MaintenanceReport />
            },
            {
                path: '*',
                element: <>
                This page is not found, please go back to the <a href="/">homepage</a>.
                <HomePage />
                </>

            }
        ]
    },
]);

export function Router() {
    const { toggleColorScheme } = useMantineColorScheme();
    return <>
        <RouterProvider router={router} />
        <Space h={20} />
        <AppFooter onThemeChange={() => {toggleColorScheme()}} /> 
    </>;   
}
