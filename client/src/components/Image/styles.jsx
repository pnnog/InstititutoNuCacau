import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 304px;
  height: 456px;
  margin-bottom: 35px;

  @media (min-width: 768px) {
    width: 376px;
    height: 564px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 32px;
  }
`;
