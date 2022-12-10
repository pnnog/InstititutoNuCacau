import styled from 'styled-components';

//Phone size
export const SectionWrapper = styled.section`
  width: 324px;
  margin: 0 auto 40px auto;

  > a {
    width: 286px;
    height: 44px;
  }

  #title {
    width: 304px;
    height: 64px;
    margin: 10px auto 50px auto;
    h1 {
      font-size: 32px;
      line-height: 32px;
      font-weight: 700;
      text-align: center;
    }
  }

  #btn-up {
    display: none;
  }
  @media (min-width: 768px) {
    width: 100%;
    #btn-up {
      display: flex;
      margin-bottom: 70px;
    }
    #btn-down {
      display: none;
    }

    #title {
      width: 744px;
      height: 128px;
      margin-bottom: 100px;
      h1 {
        text-align: center;
        font-size: 64px;
        font-weight: 700;
        line-height: 64px;
        color: #000000;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }

  #card {
    background-color: #ffffff;
    flex: none;
    border: 1.34px solid black;
    border-radius: 16.9px;
    height: 320px;
    width: 304px;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    flex: none;

    h2 {
      color: #820ad1;
      font-size: 42.93px;
      font-weight: 700;
      line-height: 54.53px;
      text-align: left;
      margin-bottom: 6px;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }
    ul {
      list-style: disc;
      margin-left: 17px;
    }
    li {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      margin-bottom: 5px;
    }

    @media (min-width: 768px) {
      height: 368px;
      width: 456px;
      border-radius: 24px;
      border: 2px solid #000000;
      margin: 0 0 24px 0;

      h2 {
        font-size: 6.4rem;
        font-weight: 700;
        line-height: 7.6rem;
        margin-bottom: 8px;
      }

      h3 {
        font-size: 3.2rem;
        line-height: 3.2rem;
        font-weight: 500;
        margin-bottom: 16px;
      }

      ul {
        margin-left: 28px;
      }

      li {
        font-size: 1.8rem;
        line-height: 2.8rem;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  margin-left: -4px;
  justify-content: center;
  gap: 50px;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 40px;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MoreInfo = styled.div`
  margin-bottom: 20px;
  h3 {
    text-align: center;
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  p {
    font-size: 12px;
    text-align: justify;
  }

  span {
    color: #820ad1;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 0 136px;
    margin: 40px 0px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 32px;
    margin-bottom: 26px;
  }

  button {
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 24px;
    padding: 16px 44px;
    color: #000000;
    font-size: 20px;
    line-height: 18px;
    font-weight: 500;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background-color: #820ad1;
      color: white;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 20px;
    h2 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      font-weight: 700;
    }

    button {
      background-color: #ffffff;
      padding: 16px 90px;
    }
  }
`;
