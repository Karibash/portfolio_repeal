import React from "react";
import App from 'next/app';
import { css, CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import SanitizeCSS from 'styles/sanitize';

export default class CustomApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <CacheProvider value={cache}>
        <Global
          styles={css`
            ${SanitizeCSS}
            body {
              font-family: 'Noto Sans JP', sans-serif;
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
        <ThemeProvider theme={{}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
};
