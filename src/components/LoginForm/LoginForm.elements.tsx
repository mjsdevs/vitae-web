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
  display: flex;
  min-width: 500px;
  height: 50px;
`;

export const ActionAnchor = styled.a`
  text-decoration: none;
  font: ${props =>  props.theme.fonts.smallText};
  font-weight: bold;
`;

SectionForm.displayName = "form";
SignInButton.displayName = "button";
ActionAnchor.displayName = "action-anchor"
