import React from 'react';

import { LoginLabel, LoginInputField } from './LoginInput.elements';
import { LoginInputProps } from './protocols';

const LoginInput: React.FC<LoginInputProps> = ({ labelName }) => {
  return (
    <>
      <LoginLabel>{labelName}</LoginLabel>
    </>
  );
};

export default LoginInput;
