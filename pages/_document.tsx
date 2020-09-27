import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';
import { EmotionCritical } from '@emotion/server/create-instance';

export default class CustomDocument extends Document<EmotionCritical> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles, test: "" };
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="author" content="Karibash" />
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
