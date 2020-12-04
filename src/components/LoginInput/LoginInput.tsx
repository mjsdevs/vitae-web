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
}) => {
  return (
    <>
      <LoginLabel htmlFor={identifier}>{labelName}</LoginLabel>

      <LoginInputContainer>
        <IconContainer isWrong={false}>
          {icon}
        </IconContainer>
        <LoginInputField
          id={identifier}
          name={identifier}
          placeholder={labelName}
          isWrong={false}
          type={type}
        />
      </LoginInputContainer>
    </>
  );
};

export default LoginInput;
