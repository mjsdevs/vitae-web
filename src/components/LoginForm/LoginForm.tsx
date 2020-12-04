import React from "react";

import {
  LoginSection,
  SectionForm,
  LoginLabel,
  LoginInput,
} from "./LoginForm.elements";

const LoginForm: React.FC = () => {
  return (
    <LoginSection>
      <SectionForm>
        <LoginLabel htmlFor="email-input">E-mail</LoginLabel>
        <LoginInput id="email-input" name="email-input" />
      </SectionForm>
    </LoginSection>
  );
};

export default LoginForm;
