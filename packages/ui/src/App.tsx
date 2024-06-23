import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import React from 'react';
// import { I18nextProvider } from 'react-i18next';
import './main.css';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        web?: any;
        nowPage: string;
    }
}

export default function App() {// <I18nextProvider i18n={}>
    
    // </I18nextProvider>
    
    
    return (
        <>
            <MantineProvider classNamesPrefix='status_page' theme={theme}>
                <Router />
            </MantineProvider>
        </>
    );
}
