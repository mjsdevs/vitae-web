import styled from "styled-components";

export const SectionContainer = styled.section`
  min-width: 780px;
  max-width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  height: 300px;
`;

export const RibbonAnchorContainer = styled.a.attrs(() => ({
  href: "https://github.com/mjsdevs/vitae-web",
}))`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ForkMeOnGitHubRibbon = styled.img`
  width: 149px;
  height: 149px;
`;

LogoContainer.displayName = "div";
ForkMeOnGitHubRibbon.displayName = "img";
