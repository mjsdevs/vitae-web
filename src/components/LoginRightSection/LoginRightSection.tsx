import React from "react";

import {
  SectionContainer,
  LogoContainer,
  RibbonAnchorContainer,
  ForkMeOnGitHubRibbon,
} from "./LoginRightSection.elements";

import { BigLoginLogo } from "../../assets/icons";

const LoginRightSection: React.FC = () => {
  return (
    <SectionContainer>
      <LogoContainer>
        <BigLoginLogo />
      </LogoContainer>

      <RibbonAnchorContainer>
        <ForkMeOnGitHubRibbon
          loading="lazy"
          alt="Fork me on GitHub"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        />
      </RibbonAnchorContainer>
    </SectionContainer>
  );
};

export default LoginRightSection;
