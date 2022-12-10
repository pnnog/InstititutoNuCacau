/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { sendContactEmail } from "../../services/sendEmail";
import { animateScroll as scroll } from 'react-scroll';
import { FormContact } from '../../src/components/Forms/FormContact/index';
import { Message } from '../../src/components/Message';
import { ContactWrapper, TitleWrapper } from '../../styles/contatoStyles';
import { toast } from 'react-hot-toast';
import { sendContactForm } from '../../services/sendEmail';

export default function Contato() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const handleOnChange = (e) => {
    if (e.target.name === 'Subject') {
      setSubject(e.target.value);
    } else if (e.target.name === 'Email') {
      setSenderEmail(e.target.value);
    } else if (e.target.name === 'Phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'Message') {
      setContent(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!subject || !senderEmail || !phone || !content) {
      toast.error('Preencha todos os campos para enviar sua mensagem.', {
        style: {
          background: '#fd3333',
          color: '#ffffff',
          padding: '15px 30px',
          fontSize: '1.5em',
        },
      });
      return;
    }

    const values = {
      subject,
      senderEmail,
      phone,
      content,
    };
    try {
      await sendContactForm(values);
      setSubject('');
      setSenderEmail('');
      setPhone('');
      setContent('');
      scroll.scrollToTop();
      const timer = setTimeout(() => {
        router.push('/');
        clearTimeout(timer);
      }, 3000);
      toast(
        'Obrigado por entrar em contato. Em breve alguém da nossa equipe de suporte irá entrar em contato com você através do seu e-mail, fique atenta!',
        {
          style: {
            background: '#810ad1',
            color: '#ffffff',
            padding: '15px',
            fontSize: '1.5em',
          },
        },
      );
    } catch {
      toast.error(
        'Ocorreu um erro ao tentar enviar sua mensagem, tente novamente!',
        {
          style: {
            background: '#fd3333',
            color: '#ffffff',
            padding: '15px',
            fontSize: '1.5em',
          },
        },
      );
    }
  };

  return (
    <>
      <ContactWrapper id="contact">
        {/* {visible && <Message />} */}
        <TitleWrapper>
          <h1>Olá, você precisa de ajuda? Entre em contato com a gente!</h1>
        </TitleWrapper>
        <FormContact
          handleOnSubmit={submitForm}
          handleOnChange={handleOnChange}
          subject={subject}
          email={senderEmail}
          phone={phone}
          message={content}
        />
      </ContactWrapper>
    </>
  );
}
