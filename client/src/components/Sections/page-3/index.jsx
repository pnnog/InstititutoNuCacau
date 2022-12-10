import React from 'react';
import { SectionWrapper, Content1, Content2, Text } from './styles';
import { Image } from '../../Image/index';

export function Page3() {
  return (
    <SectionWrapper id="page3">
      <Content1>
        <h2> Quem é Cláudia? </h2>
        <Image
          src="images/03.png"
          alt="Vários desenhos animados da Cláudia usando um laptop e mostrando que teve uma ideia."
        />
        <Text>
          <p>
            Claudia é um aplicativo educacional do Instituto Nu, desenvolvido em
            parceria com Monique Evelle e a agência de criativos periféricos
            @cacau.cria, com a proposta de facilitar conhecimentos sobre
            empreendedorismo de forma rápida e eficiente. Desenvolvemos um
            conteúdo descomplicado sobre empreendedorismo disponibilizado
            através da sua troca com a Cláudia nossa Chatbot empreendedora
          </p>
          <p>
            A Cláudia é como a gente. Ela foi toda desenvolvida com a ajuda de
            mulheres negras e empreendedoras que estão no corre!
          </p>
          <p>
            Um dos maiores desafios das pessoas que empreendem é a gestão do
            tempo entre gerir o seu próprio negócio e as responsabilidades da
            vida adulta.
          </p>
          <p>
            Pensamos nisso tudo para desenvolver a Cláudia. Ela respeita o seu
            tempo, te entrega de forma rápida e tá sempre disposta a preencher
            seu zap de informação quando você escolher. A Cláudia vai direto ao
            ponto e já aprendeu muito com a gente. O que será que ela vai
            aprender com você
          </p>
        </Text>
      </Content1>
      <Content2>
        <Text>
          <h2> Quem é Cláudia? </h2>
          <p>
            Claudia é um aplicativo educacional do Instituto Nu, desenvolvido em
            parceria com Monique Evelle e a agência de criativos periféricos
            @cacau.cria, com a proposta de facilitar conhecimentos sobre
            empreendedorismo de forma rápida e eficiente. Desenvolvemos um
            conteúdo descomplicado sobre empreendedorismo disponibilizado
            através da sua troca com a Cláudia nossa Chatbot empreendedora
          </p>
          <p>
            A Cláudia é como a gente. Ela foi toda desenvolvida com a ajuda de
            mulheres negras e empreendedoras que estão no corre!
          </p>
          <p>
            Um dos maiores desafios das pessoas que empreendem é a gestão do
            tempo entre gerir o seu próprio negócio e as responsabilidades da
            vida adulta.
          </p>
          <p>
            Pensamos nisso tudo para desenvolver a Cláudia. Ela respeita o seu
            tempo, te entrega de forma rápida e tá sempre disposta a preencher
            seu zap de informação quando você escolher. A Cláudia vai direto ao
            ponto e já aprendeu muito com a gente. O que será que ela vai
            aprender com você
          </p>
        </Text>
        <Image
          src="images/03.png"
          alt="Mulher negra sentada em frente à uma janela sorrindo."
        />
      </Content2>
    </SectionWrapper>
  );
}
