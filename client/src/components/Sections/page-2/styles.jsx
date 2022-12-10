import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #000;
`;
export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  padding: 64px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }

  @media (min-width: 1440px) {
  }
`;
export const ImageWrapper = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 0px;
    margin-right: 104px;
  }

  @media (min-width: 1440px) {
    width: 376px;
    height: 501px;
  }
`;
export const Texts = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #e5e5e5;
    font-size: 3.2rem;
    line-height: 3.2rem;
    margin-bottom: 32px;
    font-weight: 700;
  }

  ol {
    color: #e5e5e5;
    margin-left: 25px;
    margin-bottom: 32px;
  }

  li {
    color: #e5e5e5;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 10px;
  }

  li a {
    color: white;
    transition: 0.2s;
    cursor: pointer;
  }

  li a:hover {
    color: #820ad1;
  }

  @media (min-width: 1024px) {
    align-items: start;
    width: 448px;

    h2 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      margin-bottom: 48px;
    }

    li {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 20px;
      fonte-weight: 500;
    }

    > a {
      margin-top: 38px;
    }
  }
`;
