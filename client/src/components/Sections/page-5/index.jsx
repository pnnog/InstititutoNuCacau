import React from 'react';
import Link from 'next/link';
import { AlternativeButton } from '../../LinkButton/AlternativeButton(development)/index';
// eslint-disable-next-line no-unused-vars
import { Link as Scroll, animateScroll } from 'react-scroll';
import { useRef } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/BI';
import { cards } from '../../../utils/textCards';
import {
  SectionWrapper,
  CardWrapper,
  ButtonsWrapper,
  MoreInfo,
  Contact,
} from './styles';

export const Page5 = () => {
  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  };
  return (
    <SectionWrapper id="page5">
      <div id="title">
        <h1>Veja o que você irá aprender</h1>
      </div>
      <AlternativeButton id="btn-up" text="Inscreva-se" type="button" />

      <CardWrapper ref={carousel}>
        {cards.map((card) => (
          <div id="card" key={card.id}>
            <h2>{card.id}</h2>
            <h3>{card.title}</h3>
            <ul>
              <li>{card.text1}</li>
              {card.text2 && <li>{card.text2}</li>}
            </ul>
          </div>
        ))}
      </CardWrapper>
      <ButtonsWrapper>
        <button onClick={handleLeftClick} alt="Scroll left">
          <BiChevronLeft />
        </button>
        <button onClick={handleRightClick} alt="Scroll Right">
          <BiChevronRight />
        </button>
      </ButtonsWrapper>
      <MoreInfo>
        <h3>
          E aí, vamos nessa? As vagas são limitadas, sendo 60% para mulheres
          negras e 40% para outras mulheres. Chame a Claudia no WhatsApp e
          garanta seu lugar nessa experiência tocando no botão{' '}
          <span>
            <Scroll
              to="form"
              spy={true}
              smooth={true}
              offset={70}
              duration={2500}
            >
              Inscreva-se
            </Scroll>
          </span>
          .
        </h3>
        <p>
          Atenção: o conteúdo disponível na Cláudia não é uma recomendação do
          Instituto Nu, mas sim, o resultado das trocas entre uma equipe
          majoritariamente composta por mulheres negras periféricas que através
          das suas experiências práticas, desenvolveram este conteúdo. A
          intenção da chatbot Cláudia não é a de apontar um caminho apenas, mas
          compartilhar mais um novo caminho.
        </p>
      </MoreInfo>
      <AlternativeButton id="btn-down" text="Inscreva-se" type="button" />
      <Contact>
        <h2>Dúvidas?</h2>
        <Link href="/contato">
          <button>Fale conosco!</button>
        </Link>
      </Contact>
    </SectionWrapper>
  );
};
