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
  padding-top: 64px;

  h2 {
    align-self: start;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.2rem;
    margin-bottom: 32px;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Content2 = styled.article`
  display: none;

  @media (min-width: 1024px) {
    width: 100%;
    padding-top: 64px;
    padding-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      font-weight: 700;
      margin-bottom: 32px;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding: 112px 256px;
  }
`;

export const Text = styled.div`
  @media (min-width: 1024px) {
    display: block;
    width: 456px;
    margin-right: 104px;
  }
`;
