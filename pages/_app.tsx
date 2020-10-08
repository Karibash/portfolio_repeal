import React from "react";
import App from 'next/app';
import Head from "next/head";
import { css, CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import { BreakPoints, MediaQueryContextProvider } from "contexts/useMediaQueryContext";
import SanitizeCSS from 'styles/sanitize';
import dracula from "themes/dracula";

const breakPoints: BreakPoints = {
  tiny: 640,
  small: 768,
  medium: 1024,
  large: 1280,
} as const;

export default class CustomApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    // noinspection HtmlRequiredTitleElement
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <CacheProvider value={cache}>
          <Global
            styles={css`
            ${SanitizeCSS}
            body {
              font-family: 'Roboto', sans-serif;
            }
            :focus {
              outline: none;
            }
            html {
              height  : 100%;
              overflow: hidden;
              position: relative;
            }
            body {
              height  : 100%;
              overflow: auto;
              position: relative;
            }
          `}
          />
          <ThemeProvider theme={dracula}>
            <MediaQueryContextProvider breakPoints={breakPoints}>
              <Component {...pageProps} />
            </MediaQueryContextProvider>
          </ThemeProvider>
        </CacheProvider>
      </>
    );
  }
};
