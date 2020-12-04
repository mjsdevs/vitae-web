import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      purple: string;
      hoverPurple: string;
      grayBorder: string;
      red: string;
      anchorColor: string;
    };

    fonts: {
      sectionHeader: string;
      sectionSubtitle: string;
      normalText: string;
      smallText: string;
    }
  }
}
