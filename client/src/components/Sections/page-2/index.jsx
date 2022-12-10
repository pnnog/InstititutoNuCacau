import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-scroll';
import LinkButton from '../../LinkButton/LinkButton';
import { Image } from '../../Image/index';

import { SectionWrapper, SectionContent, Texts } from './styles';

export function Page2() {
  return (
    <SectionWrapper id="page2">
      <SectionContent>
        <Image
          src="images/02.png"
          alt="Mulher negra com laço roxo na cabeça usando o celular."
        />

        <Texts>
          <div>
            <h2> São 4 módulos, com os seguintes temas:</h2>
            <ol role="tablist" aria-label="Links para os cards">
              <li role="tab">
                <Link
                  to="page5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2500}
                >
                  Burocras
                </Link>
              </li>
              <li role="tab">
                <Link
                  to="page5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2500}
                >
                  Seu corre
                </Link>
              </li>
              <li role="tab">
                <Link
                  to="page5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2500}
                >
                  Na Mídia!
                </Link>
              </li>
              <li role="tab">
                <Link
                  to="page5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2500}
                >
                  Ferramentas gratuitas
                </Link>
              </li>
            </ol>
          </div>
          <LinkButton text="Inscreva-se" to="form" />
        </Texts>
      </SectionContent>
    </SectionWrapper>
  );
}
