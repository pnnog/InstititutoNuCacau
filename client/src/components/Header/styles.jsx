import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #828282;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    height: 63px;
    margin: auto;
  }

  @media (min-width: 1024px) {
    header {
      width: 878px;
    }
  }

  @media (min-width: 1440px) {
    header {
      width: 925px;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 139px;
  height: 24px;
  img {
    width: 100%;
    height: 100%;
  }

  #vertical-line {
    display: none;
  }
`;

export const MenuWrapper = styled.menu`
  a {
    font-size: 1.2em;
    transition: 10s;
    &:hover {
      text-decoration: underline;
    }
  }
`;
