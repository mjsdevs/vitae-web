import React from "react";

import {
  SectionContainer,
  RibbonAnchorContainer,
  ForkMeOnGitHubRibbon,
} from "./LoginRightSection.elements";

const LoginRightSection: React.FC = () => {
  return (
    <SectionContainer>
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
