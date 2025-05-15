import React, { Suspense } from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
const DynamicMain = dynamic(() => import('../src/main'), {
  suspense: true,
  ssr: false
})

const IndexPage = ({}) => {
  return (
    <Suspense fallback={`Loading...`}>
      <Head>
        <title>8BitPurrs</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000"/>
        <meta name="description" content="In Guise Rocket Chimp evades the Guard to secure the Metaverse Blockchain and save the New World!"/>
        <meta name="keywords" content="In Guise Rocket Chimp evades the Guard to secure the Metaverse Blockchain and save the New World!"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="8BitPurrs"/>
        <meta name="twitter:description" content="In Guise Rocket Chimp evades the Guard to secure the Metaverse Blockchain and save the New World!"/>
        <meta name="twitter:image" content="public/favicon.ico"/>
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
      </Head>
      <DynamicMain />
    </Suspense>
  );
};

export default IndexPage;
