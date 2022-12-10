/* eslint-disable react/prop-types */
import React from 'react';
import { Form, InputWrapper, SubmitButtonWrapper } from './styles';

export const FormContact = ({
  handleOnSubmit,
  handleOnChange,
  subject,
  email,
  phone,
  message,
}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <InputWrapper>
        <label>
          Assunto *
          <input
            type="text"
            name="Subject"
            value={subject || ''}
            onChange={handleOnChange}
          />
        </label>
      </InputWrapper>

      <InputWrapper>
        <label>
          E-mail *
          <input
            name="Email"
            value={email || ''}
            type="email"
            maxLength="300"
            onChange={handleOnChange}
          />
        </label>
      </InputWrapper>

      <InputWrapper>
        <label>
          Telefone para contato *
          <input
            name="Phone"
            value={phone || ''}
            type="text"
            maxLength="11"
            onChange={handleOnChange}
          />
        </label>
      </InputWrapper>

      <div id="textarea_container">
        <label>
          Mensagem *
          <textarea
            name="Message"
            value={message || ''}
            maxLength="300"
            rows="8"
            type="text"
            onChange={handleOnChange}
          />
        </label>
      </div>

      <SubmitButtonWrapper>
        <button type="submit">Enviar</button>
      </SubmitButtonWrapper>
    </Form>
  );
};
