import React from 'react';
import { FooterWrapper } from './styles';
export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Desenvolvido por{' '}
        <a
          href="https://www.instagram.com/cacau.cria/"
          target="_blank"
          rel="external noreferrer"
        >
          @cacau.cria
        </a>{' '}
      </p>
    </FooterWrapper>
  );
};
