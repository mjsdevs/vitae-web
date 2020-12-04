import styled from "styled-components";

export const LoginSection = styled.section`
  height: 100vh;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SectionForm = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const LoginLabel = styled.label`
  display: none;
`;

interface InputProps {
  isWrong: boolean;
}

export const LoginInput = styled.input<InputProps>`
  height: 50px;
  width: 275px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => {
      const borderColor = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return borderColor;
    }};

  ::placeholder {
    color: ${(props) => {
      const color = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return color;
    }};

    font: ${(props) => props.theme.fonts.smallText};
  }
`;

export const SignInButton = styled.button``;

SectionForm.displayName = "form";
LoginLabel.displayName = "label";
LoginInput.displayName = "input";
SignInButton.displayName = "button";
