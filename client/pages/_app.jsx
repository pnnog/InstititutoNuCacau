import React from 'react';
import '../styles/globals.css';
import { Header } from '../src/components/Header/index';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../src/components/Footer/index';

// eslint-disable-next-line no-unused-vars, react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Toaster position="top-center" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
