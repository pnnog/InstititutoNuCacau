import React, { useState } from 'react';

import {
  FormWrapper,
  Inputs,
  SubmitButtonWrapper,
  AcceptTerms,
} from './styles';
import { ExtraInput } from './ExtraInput/index';

import Axios from 'axios';
import { toast } from 'react-hot-toast';
import { animateScroll as scroll } from 'react-scroll';

export const FormComponent = () => {
  const [formData, setFormData] = useState({});
  const [disableExtraInputJob, setDisableExtraInputJob] = useState(true);
  const [disableExtraInputHow, setDisableExtraInputHow] = useState(true);
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    if (key=== 'job' && value === 'Outro') {
      setDisableExtraInputJob(!disableExtraInputJob);
    }

    if (key=== 'how' && value === 'Outro') {
      setDisableExtraInputHow(!disableExtraInputHow);
    }
    if (key === 'accept' && value === 'Sim') {
      setShowTerms(true);
    }
    setFormData({ ...formData, [key]: value });
  };

 

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.region ||
      !formData.cnpj ||
      !formData.breed ||
      !formData.gender ||
      !formData.job ||
      !formData.how ||
      !formData.accept
    ) {
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

    try {
      Axios.post(`${process.env.NEXT_PUBLIC_DB_SERVER}`, {
        nome: formData.name,
        email: formData.email,
        telefone: parseInt(formData.phone),
        estado: formData.region,
        cnpj: formData.cnpj,
        raca: formData.breed,
        genero: formData.gender,
        negocio: formData.job,
        comoConheceu: formData.how,
      });
     
      scroll.scrollToTop();
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
    } catch (err) {
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
    <FormWrapper onSubmit={submitForm}>
      <Inputs>
        <div id="input-name" className="inputs">
          <label>
            Nome:
            <input
              value={formData.name || ''}
              maxLength="30"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </label>
        </div>

        <div id="input-email" className="inputs">
          <label>
            Email:
            <input
              value={formData.email || ''}
              type="email"
              maxLength="40"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </label>
        </div>

        <div id="input-phone" className="inputs">
          <label>
            Telefone:
            <input
              value={formData.phone || ''}
              maxLength="11"
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </label>
        </div>

        <div id="input-region" className="selects">
          <label>
            Estado:
            <select
              name="region"
              onChange={handleChange}
              defaultValue="default"
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>

              <option value="Estrangeiro">Estrangeiro</option>
            </select>
          </label>
        </div>

        <div id="input-cnpj" className="selects">
          <label>
            Tem CNPJ?
            <select
              name="cnpj"
              id="cnpj"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </label>
        </div>

        <div id="input-breed" className="selects">
          <label>
            Como você se reconhece racialmente?
            <select
              id="breed"
              name="breed"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Preta">Preta</option>
              <option value="Parda">Parda</option>
              <option value="Amarela">Amarela</option>
              <option value="Indígena">Indígena</option>
              <option value="Branca">Branca</option>
            </select>
          </label>
        </div>

        <div id="input-gender" className="selects">
          <label>
            Como você se identifica?
            <select
              name="gender"
              id="gender"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Homem-cis">Homem-cis</option>
              <option value="Mulher-cis">Mulher-cis</option>
              <option value="Homem-trans">Homem-trans</option>
              <option value="Mulher-trans">Mulher-trans</option>
              <option value="Gênero neutro">Gênero neutro</option>
              <option value="Não-binário">Não-binário</option>
            </select>
          </label>
        </div>

        <div id="input-job" className="selects">
          <label>
            Qual a área do seu negócio?
            <select
              name="job"
              id="job"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Beleza">Beleza</option>
              <option value="Moda">Moda</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Cultura">Cultura</option>
              <option value="Saúde">Saúde</option>
              <option value="Educação">Educação</option>
              <option value="Esporte">Esporte</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Artesanato">Artesanato</option>
              <option value="Outro">Outro</option>
            </select>
            <ExtraInput
              maxlength="30"
              disabled={disableExtraInputJob}
              name="job"
              placeholder="Me conta qual sua área de negócio"
              handleChange={handleChange}
            />
          </label>
        </div>

        <div id="input-how" className="selects">
          <label>
            Como você soube do programa?
            <select
              name="how"
              id="how"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Site">Site</option>
              <option value="Redes Sociais">Redes Sociais</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Ongs">Ongs</option>
              <option value="Outro">Outro</option>
            </select>
            <ExtraInput
              disabled={disableExtraInputHow}
              name="how"
              placeholder="Me conte como soube da gente"
              handleChange={handleChange}
            />
          </label>
        </div>

        <div id="input-accept-contact" className="selects">
          <label>
            Você aceita ser contatada com as informações do programa pelo
            WhatsApp?
            <select
              name="accept"
              id="accept"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </label>
          {showTerms && (
            <AcceptTerms id="checkbox-input">
              <label>
                <input type="checkbox" name="accept-terms" id="accept-terms" />
                Permito que o Instituto Nu com base nos termos de utilização dos
                dados interaja com os dados compartilhados por mim.
              </label>
            </AcceptTerms>
          )}
        </div>
      </Inputs>
      <SubmitButtonWrapper>
        <button type="submit">Enviar</button>
      </SubmitButtonWrapper>
    </FormWrapper>
  );
};
