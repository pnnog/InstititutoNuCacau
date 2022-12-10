import React from 'react';
import { SectionWrapper, Content1, Content2, Text } from './styles';
import LinkButton from '../../LinkButton/LinkButton';
import { Image } from '../../Image/index';

export function Page4() {
  return (
    <SectionWrapper id="page4">
      <Content1>
        <h1> Por que adicionar a Cláudia no meu WhatsApp? </h1>
        <Image
          src="images/04.png"
          alt="Mulher negra sentada em frente à uma janela sorrindo."
        />
        <Text>
          <p>
            Toda semana Claudia trará a você informações realmente necessárias,
            de forma descomplicada para te apoiar em sua trilha como
            empreendedora.
          </p>
          <p>
            Claudia é um App como a gente. Tem uma linguagem fácil e que todo
            mundo entende!
          </p>
          <h2> Como me inscrever? </h2>
          <p>
            Para se cadastrar toque no link abaixo e preencha o formulário.
            Depois, é só adicionar a Claudia em seu WhatsApp através do link que
            será disponibilizado. A Claudia está esperando por você lá:
          </p>
        </Text>
        <LinkButton text="Inscreva-se" to="form" />
      </Content1>
      <Content2>
        <Text>
          <h1> Por que adicionar a Cláudia no meu WhatsApp? </h1>
          <p>
            Toda semana Claudia trará a você informações realmente necessárias,
            de forma descomplicada para te apoiar em sua trilha como
            empreendedora.
          </p>
          <p>
            Claudia é um App como a gente. Tem uma linguagem fácil e que todo
            mundo entende!
          </p>
          <h2> Como me inscrever? </h2>
          <p>
            Para se cadastrar toque no link abaixo e preencha o formulário.
            Depois, é só adicionar a Claudia em seu WhatsApp através do link que
            será disponibilizado. A Claudia está esperando por você lá:
          </p>
        </Text>
        <Image
          src="images/04.png"
          alt="Mulher negra sentada em frente à uma janela sorrindo."
        />
      </Content2>
    </SectionWrapper>
  );
}
