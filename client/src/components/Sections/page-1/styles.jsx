import styled from 'styled-components';

export const SectionWrapper = styled.section`
  /////////////// ACIMA DE 375PX;

  display: flex;
  flex-direction: column;
  width: 85%;
  padding-top: 41px;
  padding-bottom: 64px;
  margin: auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1440px) {
    padding-top: 120px;
    padding-bottom: 96px;
  }
`;

export const LeftSide = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #000000;
    font-size: 3.4rem;
    font-weight: 500;
    line-height: 3.2rem;
    margin-bottom: 32px;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 24px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    align-items: center;
  }
  //////////ACIMA DE 1024PX

  @media (min-width: 1024px) {
    align-items: start;
    width: 400px;
    margin-right: 104px;
  }

  ////////////////// ACIMA DE 1440PX
  @media (min-width: 1440px) {
    width: 456px;

    h1 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      margin-bottom: 48px;
    }

    p {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
  }
`;

export const Texts = styled.div`
  ////////////// ACIMA DE 1024PX
  margin-bottom: 40px;
`;

export const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 376px;
    height: 564px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 32px;
    }
  }

  @media (min-width: 1440px) {
    width: 376px;
    height: 564px;

    img {
      border-radius: 32px;
    }
  }
`;
