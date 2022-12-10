import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  #message_container {
    width: 100%;
    label {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      gap: 20px;
    }
  }

  #textarea_container {
    width: 100%;
    margin: auto;
    label {
      display: flex;
      flex-direction: column;
      font-size: 25px;
      line-height: 25px;
      gap: 20px;
    }
    textarea {
      margin-top: 30px;
      padding: 15px;
      font-size: 1em;
      transition: 0.3s;

      &:focus {
        outline: 0;
        border-color: #810ad1ed;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
  input {
    padding: 15px;
    border: none;
    line-height: 20px;
    font-size: 1em;
    border-bottom: 1px solid #810ad140;
    transition: 0.3s;

    &:focus {
      outline: 0;
      border-color: #810ad1ed;
    }
  }
`;
export const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  width: 286px;
  margin: auto;
  button {
    border: none;
    background: #820ad1;
    text-align: center;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    line-height: 18px;
    color: #ffffff;
    border-radius: 24px;
    padding: 16px 84px;
    cursor: pointer;
  }
`;
