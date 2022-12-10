import React from 'react';
import Head from 'next/head';
import { Page1 } from '../src/components/Sections/page-1/index';
import { Page2 } from '../src/components/Sections/page-2/index';
import { Page3 } from '../src/components/Sections/page-3/index';
import { Page4 } from '../src/components/Sections/page-4/index';
import { Page5 } from '../src/components/Sections/page-5/index';
import { Page6 } from '../src/components/Sections/page-6/index';

export default function Index() {
  return (
    <>
      <Head>
        <title>Instituto Nu</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content='content="O Instituto Nu vai enfrentar a desigualdade social por meio da educação, do empreendedorismo e da inovação social. Conheça."'
        />
        <link rel="icon" type="image/png" href="images/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="images/favicon-192x192.png" />
      </Head>

      <main>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </main>
    </>
  );
}
