import React from "react";

import {
  LoginSection,
  LogoContainer,
  SectionForm,
  ActionAnchor,
  MainActionsContainer,
  SignInButton,
  SignUpContainer,
  SignUpText,
} from "./LoginForm.elements";
import LoginInput from "../LoginInput";
import { LoginFormSignature } from "./protocols";
import { LoginLogo, UserIcon, KeyIcon } from "../../assets/icons";

const LoginForm: React.FC<LoginFormSignature> = ({ handle }) => {
  return (
    <LoginSection>
      <LogoContainer>
        <LoginLogo />
      </LogoContainer>

      <SectionForm onSubmit={handle} noValidate>
        <LoginInput
          labelName="Email"
          identifier="email-input"
          type="email"
          icon={<UserIcon />}
          isWrong={false}
        />
        <LoginInput
          labelName="Password"
          identifier="password-input"
          type="password"
          icon={<KeyIcon />}
          isWrong={false}
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
