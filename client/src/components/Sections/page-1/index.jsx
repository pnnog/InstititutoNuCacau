import React from 'react';
import LinkButton from '../../LinkButton/LinkButton';
import { SectionWrapper, LeftSide, Texts, ImageWrapper } from './styles';

export function Page1() {
  return (
    <SectionWrapper id="page1">
      <LeftSide>
        <Texts>
          <h1>
            Conheça a <strong>Cláudia</strong> do instituto Nu, o App gratuito
            de educação empreendedora.
          </h1>
          <p>
            {' '}
            Empreender não é fácil. E nós sabemos que é mais difícil ainda
            aprender tanta coisa importante para gerenciar sua empresa quando
            você se torna empreendedor por necessidade.
          </p>
          <p>
            Pensando em colaborar com o desenvolvimento de mulheres
            empreendedoras das periferias de todo o Brasil, em especial,
            mulheres negras, desenvolvemos a Claudia, um Aplicativo automático
            com foco em educação empreendedora.
          </p>
          <p>
            Uma ferramenta totalmente gratuita, sem nenhum custo. A Cláudia foi
            feita para despertar e motivar empreendedoras periféricas de todo o
            Brasil para a construção de ideias inovadoras, auxiliando na
            formação e na transformação de seus negócios.
          </p>
        </Texts>
        <LinkButton />
      </LeftSide>
      <ImageWrapper>
        <img
          src="images/01.png"
          alt="Imagem em formato de desenho da Cláudia: Uma mulher negra acenando."
        />
      </ImageWrapper>
    </SectionWrapper>
  );
}
