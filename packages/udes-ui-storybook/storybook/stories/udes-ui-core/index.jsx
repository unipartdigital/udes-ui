import React from "react";
import Stories from "./stories";
import { ThemeProvider, theme } from "../../../../udes-ui-core/src";

export default {
  // eslint-disable-next-line react/display-name, react/prop-types
  decorator: (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>,
  examples: [...Stories],
};
