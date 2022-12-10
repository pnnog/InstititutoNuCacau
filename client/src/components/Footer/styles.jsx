import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: transparent;
  padding: 20px;

  p {
    text-align: center;
    color: #000000;
    font-size: 1em;
  }
  a {
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #fde756;
    color: black;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: black;
      color: #fde756;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`;
