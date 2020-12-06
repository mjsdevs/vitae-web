import { FormEvent } from "react";

export interface LoginFormSignature {
  handle(
    e: FormEvent,
    formData: {
      email: string;
      password: string;
    }
  ): void;
  isWrong: boolean;
}
