import { createMuiTheme, Theme as MUITheme } from "@material-ui/core";
// eslint-disable-next-line max-len
import { ThemeOptions as MUIThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import palette from "./palette";

export type Theme = MUITheme;
export type ThemeOptions = MUIThemeOptions;

/**
 * Merges two objects from a Material UI theme together recursively.
 *
 * NB: Type annotations are the same as Object.assign
 */
function merge<T1 extends object, T2 extends object>(a: T1, b: T2): T1 & T2 {
  const merged = Object.assign({}, a, b);

  for (const k in merged) {
    if (
      typeof a[k] == "object" &&
      typeof b[k] == "object" &&
      !Array.isArray(a[k]) && // Avoid merging arrays
      !Array.isArray(b[k])
    ) {
      merged[k] = merge(a[k], b[k]);
    }
  }

  return merged;
}

export function createModifiedTheme(
  theme: Theme,
  newOptions: ThemeOptions,
): Theme {
  return createMuiTheme(merge(theme, newOptions));
}

const themeOptions: ThemeOptions = {
  palette,
  overrides: {},
  props: {
    MuiFormControl: { variant: "standard" },
    MuiTextField: { variant: "standard" },
    MuiTypography: { color: "textPrimary" },
  },
  typography: {
    h1: { fontSize: "30px", fontWeight: "normal" },
    h2: { fontSize: "24px", fontWeight: "normal" },
    h3: { fontSize: "22px", fontWeight: 300 },
    h4: { fontSize: "22px", fontWeight: 300 }, // Not defined
    h5: { fontSize: "22px", fontWeight: 300 }, // Not defined
    h6: { fontSize: "22px", fontWeight: 300 }, // Not defined
    body1: { fontSize: "16px", fontWeight: "normal" },
    body2: { fontSize: "16px", fontWeight: 600 },
    caption: { fontSize: "14px", fontWeight: "normal" },
    button: { fontSize: "16px", fontWeight: "bold", textTransform: "none" },

    fontFamily: ["Source Sans Pro", "Helvetica", "sans-serif"].join(", "),
  },
};

export const theme = createMuiTheme(themeOptions);

export default theme;
