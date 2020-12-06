import React, { FormEvent, useState } from "react";

import {
  LoginSection,
  LogoContainer,
  SectionForm,
  ActionAnchor,
  MainActionsContainer,
  SignInButton,
  SignUpContainer,
  SignUpText,
  ErrorMessage,
} from "./LoginForm.elements";
import LoginInput from "../LoginInput";
import { LoginFormSignature } from "./protocols";
import { LoginLogo, UserIcon, KeyIcon } from "../../assets/icons";

const LoginForm: React.FC<LoginFormSignature> = ({ handle, isWrong }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginSection>
      <LogoContainer>
        <LoginLogo />
      </LogoContainer>

      {isWrong && <ErrorMessage>Wrong Email or Password provided</ErrorMessage>}

      <SectionForm
        onSubmit={(e: FormEvent) => handle(e, { email, password })}
        noValidate
      >
        <LoginInput
          labelName="Email"
          identifier="email-input"
          type="email"
          icon={<UserIcon />}
          isWrong={isWrong}
          onChange={setEmail}
        />
        <LoginInput
          labelName="Password"
          identifier="password-input"
          type="password"
          icon={<KeyIcon />}
          isWrong={isWrong}
          onChange={setPassword}
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
