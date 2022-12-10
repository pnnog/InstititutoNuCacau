import React from 'react';
import styles from './LinkButton.module.css';
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from 'react-scroll';
import { LinkWrapper } from './LinkButtonStyles';

// eslint-disable-next-line react/prop-types
export default function LinkButton({ customClass }) {
  return (
    <Link
      to="form"
      spy={true}
      smooth={true}
      offset={70}
      duration={2500}
      className={`${styles.out} ${styles[customClass]}`}
    >
      <LinkWrapper>Inscreva-se</LinkWrapper>
    </Link>
  );
}
