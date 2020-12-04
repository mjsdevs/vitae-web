import React from "react";

import {
  LoginSection,
  SectionForm,
  SignInButton,
} from "./LoginForm.elements";
import LoginInput from "../LoginInput/LoginInput";
import { LoginFormSignature } from "./protocols";

const LoginForm: React.FC<LoginFormSignature> = ({ handle }) => {
  return (
    <LoginSection>
      <SectionForm onSubmit={handle} noValidate>
        <LoginInput labelName="Email" identifier="email-input" type="email" />
        <LoginInput labelName="Password" identifier="password-input" type="password" />
        <SignInButton type="submit">Sign In</SignInButton>
      </SectionForm>
    </LoginSection>
  );
};

export default LoginForm;
