import React from 'react';
import { SectionWrapper, SectionWrapperGrey, SectionContent } from './styles';

import { FormComponent } from '../../Forms/index';
export const Page6 = () => {
  return (
    <SectionWrapper id="form">
      <SectionWrapperGrey>
        <SectionContent>
          <h2>Adicione a Cláudia no seu WhatsApp hoje mesmo!</h2>
          <p>
            Faça sua inscrição e receba dicas práticas para formalizar e crescer
            seu negócio. 100% grátis, online e por WhatsApp.
          </p>
          <FormComponent />
        </SectionContent>
      </SectionWrapperGrey>
    </SectionWrapper>
  );
};
