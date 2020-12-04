import React from "react";

import {
  LoginInputContainer,
  LoginLabel,
  LoginInputField,
  IconContainer,
} from "./LoginInput.elements";
import { LoginInputProps } from "./protocols";
import { UserIcon } from "../../assets/icons";

const LoginInput: React.FC<LoginInputProps> = ({
  labelName,
  identifier,
  type,
}) => {
  return (
    <>
      <LoginLabel htmlFor={identifier}>{labelName}</LoginLabel>

      <LoginInputContainer>
        <IconContainer isWrong={false}>
          <UserIcon />
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
