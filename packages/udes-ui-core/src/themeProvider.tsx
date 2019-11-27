import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";
import { Theme, theme } from "./theme";

interface Props {
  /** @default the `theme` exported by `@udes-ui/core` */
  theme?: Theme;
  children?: React.ReactNode;
}

/** Combined styled-components and Material UI ThemeProvider. */
export const ThemeProvider: React.FC<Props> = (props: Props) => (
  <StyledThemeProvider theme={props.theme ?? theme}>
    <MUIThemeProvider theme={props.theme ?? theme}>
      {props.children}
    </MUIThemeProvider>
  </StyledThemeProvider>
);

export default ThemeProvider;
