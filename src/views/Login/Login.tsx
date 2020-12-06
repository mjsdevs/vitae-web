import React, { FormEvent, useState } from "react";
import * as EmailValidator from "email-validator";

import { LoginForm } from "../../components";

const Login: React.FC = () => {
  const [isWrong, setIsWrong] = useState(false);

  const handleSubmit = (e: FormEvent, formData: any) => {
    e.preventDefault();
    const requiredFields = ["email", "password"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setIsWrong(true);
        return;
      }
    }
    console.log(formData);

    const { email, password } = formData;

    const isEmailValid = EmailValidator.validate(email);
    if (isEmailValid === false) {
      setIsWrong(true);
      console.log('email inválido');
      return;
    }

    if (password.length < 3) {
      console.log('senha inválida');
      setIsWrong(true);
      return;
    }

  };

  return <LoginForm handle={handleSubmit} isWrong={isWrong} />;
};

export default Login;
