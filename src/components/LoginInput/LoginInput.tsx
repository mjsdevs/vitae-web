import React from "react";

import { LoginLabel, LoginInputField } from "./LoginInput.elements";
import { LoginInputProps } from "./protocols";

const LoginInput: React.FC<LoginInputProps> = ({
  labelName,
  identifier,
  type,
}) => {
  return (
    <>
      <LoginLabel htmlFor={identifier}>{labelName}</LoginLabel>
      <LoginInputField
        id={identifier}
        name={identifier}
        placeholder={labelName}
        isWrong={false}
        type={type}
      />
    </>
  );
};

export default LoginInput;
