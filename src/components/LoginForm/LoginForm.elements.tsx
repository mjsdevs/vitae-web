import styled from "styled-components";

export const LoginSection = styled.section`
  height: 100vh;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SectionForm = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
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

export const SignInButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.purple};
  font: ${(props) => props.theme.fonts.smallText};
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  border: none;
  box-shadow: 3px, 3px, 5px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: ${(props) => props.theme.colors.hoverPurple};
  }

  transition: background-color 0.1s ease-in;
`;

SectionForm.displayName = "form";
LoginLabel.displayName = "label";
LoginInput.displayName = "input";
SignInButton.displayName = "button";
