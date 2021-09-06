
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/theme';
import { Layout } from '../modules';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
);

};

export default MyApp;

