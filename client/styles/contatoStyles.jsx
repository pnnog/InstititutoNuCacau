import styled from 'styled-components';

export const ContactWrapper = styled.section`
  background-color: #ffffff;
  width: 85%;
  min-height: 100vh;
  margin: 50px auto;

  @media (min-width: 1024px) {
    width: 878px;
  }
  @media (min-width: 1440px) {
    width: 920px;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  h1 {
    font-size: 3em;
    font-weight: 400;
  }
`;
