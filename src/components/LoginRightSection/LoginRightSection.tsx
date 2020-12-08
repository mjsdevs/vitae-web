import React from "react";

import { SectionContainer } from "./LoginRightSection.elements";

const LoginRightSection: React.FC = () => {
  return (
    <SectionContainer>
      <a href="https://github.com/you">
        <img
          loading="lazy"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </SectionContainer>
  );
};

export default LoginRightSection;
