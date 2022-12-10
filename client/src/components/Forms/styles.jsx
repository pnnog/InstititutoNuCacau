import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  .inputs,
  .selects {
    width: 296px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 13px;
  }
  input,
  select {
    width: 100%;
    padding: 10px 8px;

    border: none;
    font-size: 14px;
    line-height: 20px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #666666;
    }
  }
  input {
    padding: 10px 14px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 90px;
    text-align: left;
    gap: 16px;
  } ;
`;

export const SubmitButtonWrapper = styled.div`
  width: 294px;
  height: 44px;
  display: flex;
  align-items: center;

  button {
    width: 100%;
    padding: 16px 88px;
    font-size: 20px;
    font-weight: 700;
    line-height: 18px;
    color: #ffffff;
    background-color: #820ad1;
    border: none;
    cursor: pointer;
  }
`;

export const AcceptTerms = styled.div`
  margin-top: 20px;
  label {
    flex-direction: row;
  }
  input {
    width: 20px;
    height: 20px;
  }
`;
