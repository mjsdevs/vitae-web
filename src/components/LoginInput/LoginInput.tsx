import React from "react";

import {
  LoginInputContainer,
  LoginLabel,
  LoginInputField,
  IconContainer,
} from "./LoginInput.elements";
import { LoginInputProps } from "./protocols";

const LoginInput: React.FC<LoginInputProps> = ({
  labelName,
  identifier,
  type,
  icon,
  isWrong,
}) => {
  return (
    <>
      <LoginLabel htmlFor={identifier}>{labelName}</LoginLabel>

      <LoginInputContainer>
        <IconContainer isWrong={isWrong}>{icon}</IconContainer>
        <LoginInputField
          id={identifier}
          name={identifier}
          placeholder={labelName}
          isWrong={isWrong}
          type={type}
        />
      </LoginInputContainer>
    </>
  );
};

export default LoginInput;
