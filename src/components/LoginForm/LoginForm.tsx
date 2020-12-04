import React from "react";

import {
  LoginSection,
  SectionForm,
  ActionAnchor,
  MainActionsContainer,
  SignInButton,
  SignUpContainer,
  SignUpText,
} from "./LoginForm.elements";
import LoginInput from "../LoginInput/LoginInput";
import { LoginFormSignature } from "./protocols";

const LoginForm: React.FC<LoginFormSignature> = ({ handle }) => {
  return (
    <LoginSection>
      <SectionForm onSubmit={handle} noValidate>
        <LoginInput labelName="Email" identifier="email-input" type="email" />
        <LoginInput
          labelName="Password"
          identifier="password-input"
          type="password"
        />

        <MainActionsContainer>
          <ActionAnchor>Forgot Password?</ActionAnchor>
          <SignInButton type="submit">Sign In</SignInButton>
        </MainActionsContainer>

        <SignUpContainer>
          <SignUpText>Don't have an account?</SignUpText>
          <ActionAnchor>Sign Up</ActionAnchor>
        </SignUpContainer>
      </SectionForm>
    </LoginSection>
  );
};

export default LoginForm;
