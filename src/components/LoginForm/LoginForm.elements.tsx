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
  justify-content: space-between;
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
`;

export const SignUpText = styled.p`
  font: ${(props) => props.theme.fonts.smallText};
  font-weight: 300;
`;

SectionForm.displayName = "form";
SignInButton.displayName = "button";
ActionAnchor.displayName = "action-anchor";
