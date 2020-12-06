import styled from "styled-components";
interface InputProps {
  isWrong: boolean;
}

export const LoginLabel = styled.label`
  display: none;
`;

export const LoginInputContainer = styled.div`
  display: flex;
`;

export const LoginInputField = styled.input<InputProps>`
  height: 50px;
  min-width: 275px;
  width: 350px;
  padding: 15px;
  border-radius: 0px 5px 5px 0px;
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

export const IconContainer = styled.div<InputProps>`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  border-top: 1px solid
    ${(props) => {
      const borderColor = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return borderColor;
    }};

  border-bottom: 1px solid
    ${(props) => {
      const borderColor = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return borderColor;
    }};

  border-left: 1px solid
    ${(props) => {
      const borderColor = props.isWrong
        ? props.theme.colors.red
        : props.theme.colors.grayBorder;

      return borderColor;
    }};

  svg {
    path {
      fill: ${(props) => {
        const borderColor = props.isWrong
          ? props.theme.colors.red
          : props.theme.colors.grayBorder;

        return borderColor;
      }};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
`;

ErrorMessage.displayName = "error";
LoginLabel.displayName = "label";
LoginInputField.displayName = "input";
