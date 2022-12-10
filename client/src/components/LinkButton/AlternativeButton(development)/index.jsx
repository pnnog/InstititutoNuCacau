import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from 'react-scroll';
import { LinkWrapper } from './styles';

// eslint-disable-next-line react/prop-types
export const AlternativeButton = ({ id }) => {
  return (
    <LinkWrapper id={id}>
      <Link to="form" spy={true} smooth={true} offset={70} duration={2500}>
        Inscreva-se
      </Link>
    </LinkWrapper>
  );
};
