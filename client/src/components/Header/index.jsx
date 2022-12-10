import React from 'react';
import Link from 'next/link';
import { HeaderWrapper, LogoWrapper, MenuWrapper } from './styles';
// eslint-disable-next-line react/prop-types
export const Header = ({ full }) => {
  return (
    <HeaderWrapper>
      <header>
        <LogoWrapper className={full}>
          <Link href="./">
            <img src="images/NuLogoSmall.png" alt="Logo roxo do instituto NU" />
          </Link>
          <div id="vertical-line">
            <img
              src="images/LineLogo.png"
              alt="Linha vertical de decoração ao lado da logo"
            />
          </div>
        </LogoWrapper>
        <MenuWrapper>
          <Link href="/contato"> Fale Conosco</Link>
        </MenuWrapper>
      </header>
    </HeaderWrapper>
  );
};
