// import App from "next/app";
import type { AppProps } from 'next/app';

import styled, { createGlobalStyle } from 'styled-components';
import { theme } from 'layout/theme';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    }

    body {
        background-color: ${theme.colors.appBackground}
    }

   * {
    color: ${theme.colors.text};
    border-color: ${theme.colors.cardBorder};
    font-family: Arial, Helvetica, sans-serif;
     & > * {
        color: ${theme.colors.text};
        border-color: ${theme.colors.cardBorder};
        .card {
            background-color: ${theme.colors.cardBackground};
        }
    }
    .card {
        background-color: ${theme.colors.cardBackground};
        }
    }
`;

const AppContainer = styled.div`
    height: 100vh;
`;
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <AppContainer className={'AppContainer'}>
                <Component {...pageProps} />
            </AppContainer>
        </>
    );
}

export default MyApp;
