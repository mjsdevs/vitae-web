import React from "react";

import {
  LoginSection,
  SectionForm,
  LoginLabel,
  LoginInput,
  SignInButton,
} from "./LoginForm.elements";

const LoginForm: React.FC = () => {
  return (
    <LoginSection>
      <SectionForm onSubmit={() => {}}>
        <LoginLabel htmlFor="email-input">E-mail</LoginLabel>
        <LoginInput id="email-input" name="email-input" />

        <LoginLabel htmlFor="password-input">Password</LoginLabel>
        <LoginInput id="password-input" name="password-input" />

        <SignInButton type="submit">Sign In</SignInButton>
      </SectionForm>
    </LoginSection>
  );
};

export default LoginForm;
