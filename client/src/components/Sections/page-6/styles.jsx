import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #820ad1;

  @media (min-width: 938px) {
    padding: 70px 0;
  }

  @media (min-width: 1024px) {
    padding: 86px 0;
  }
`;

export const SectionWrapperGrey = styled.section`
  background-color: #e5e5e5;
  max-width: 936px;
  margin: auto;
`;

export const SectionContent = styled.div`
  width: 85%;
  margin: auto;
  padding: 53px 0;

  h2 {
    font-size: 3.2rem;
    line-height: 3.2rem;
    font-weight: 700;
    color: #820ad1;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 400;
    color: #000000;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    text-align: center;
  }
`;
