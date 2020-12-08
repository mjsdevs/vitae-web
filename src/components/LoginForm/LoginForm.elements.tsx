import styled from "styled-components";

export const LoginSection = styled.section`
  height: 100vh;
  min-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  svg {
    height: 125px;
  }
`;

export const SectionForm = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
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

export const MainActionsContainer = styled.div`
  height: 50px;
  min-width: 275px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ActionAnchor = styled.a`
  text-decoration: none;
  font: ${(props) => props.theme.fonts.smallText};
  font-weight: bold;
  color: ${(props) => props.theme.colors.anchorColor};
`;

export const SignUpContainer = styled.div`
  min-width: 275px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const SignUpText = styled.p`
  font: ${(props) => props.theme.fonts.smallText};
  font-weight: 300;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  font: ${(props) => props.theme.fonts.smallText};
`;

ErrorMessage.displayName = "error";
SectionForm.displayName = "form";
SignInButton.displayName = "button";
ActionAnchor.displayName = "action-anchor";
