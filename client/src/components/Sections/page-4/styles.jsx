import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
`;

export const Content1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  padding-bottom: 32px;

  h1 {
    align-self: start;
    width: 296px;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.2rem;
    margin-bottom: 32px;
  }

  h2 {
    width: 296px;
    font-size: 3.2rem;
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 32px;
    line-height: 3.2rem;
  }

  img {
    width: 304px;
    height: 456px;
    margin-bottom: 32px;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 15px;
  }

  a {
    margin-top: 17px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Content2 = styled.article`
  display: none;

  @media (min-width: 1024px) {
    width: 100%;
    padding-bottom: 32px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    /* img {
      width: 304px;
      height: 456px;
    } */

    h1 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      font-weight: 700;
      margin-bottom: 32px;
    }

    h2 {
      font-size: 3.2rem;
      font-weight: 700;
      margin-top: 32px;
      margin-bottom: 32px;
      line-height: 3.2rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding: 0px 256px 112px 256px;

    /* img {
      width: 376px;
      height: 564px;
    } */
  }
`;

export const Text = styled.div`
  @media (min-width: 1024px) {
    display: block;
    width: 456px;
    margin-left: 104px;
  }
`;
