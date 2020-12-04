import React from "react";

import {
  LoginSection,
  SectionForm,
  LoginLabel,
  LoginInput,
  SignInButton,
} from "./LoginForm.elements";

import { LoginFormSignature } from "./protocols";

const LoginForm: React.FC<LoginFormSignature> = ({ handle }) => {
  return (
    <LoginSection>
      <SectionForm onSubmit={handle}>
        <LoginLabel htmlFor="email-input">E-mail</LoginLabel>
        <LoginInput
          id="email-input"
          name="email-input"
          placeholder="E-mail"
          isWrong={false}
        />

        <LoginLabel htmlFor="password-input">Password</LoginLabel>
        <LoginInput
          id="password-input"
          name="password-input"
          type="password"
          placeholder="Password"
          isWrong
        />

        <SignInButton type="submit">Sign In</SignInButton>
      </SectionForm>
    </LoginSection>
  );
};

export default LoginForm;
