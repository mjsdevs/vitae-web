import styled from "styled-components";

export const LoginLabel = styled.label`
  display: none;
`;

interface InputProps {
  isWrong: boolean;
}

export const LoginInputField = styled.input<InputProps>`
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

  :-ms-input-placeholder {
    color: ${(props) => {
      const color = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return color;
    }};

    font: ${(props) => props.theme.fonts.smallText};
  }

  ::-ms-input-placeholder {
    color: ${(props) => {
      const color = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return color;
    }};

    font: ${(props) => props.theme.fonts.smallText};
  }
`;

LoginLabel.displayName = "label";
LoginInputField.displayName = "input";
