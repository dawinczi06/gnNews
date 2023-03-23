import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>gnNews</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
