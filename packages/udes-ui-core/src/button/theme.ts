import palette from "../palette";
import { ThemeOptions } from "../theme";

export const theme: ThemeOptions = {
  overrides: {
    MuiButton: {
      // Set border radius to an arbitrary large value for a pill shape.
      // "50%" does not have the desired effect and results in an oval shape.
      root: { borderRadius: "1e9px" },

      // Clear Material UI's font size overrides so that the size defined by
      // typography is used.
      // Also adjust button padding to make the overall size match the UX spec.
      // Only the large sized buttons are used.
      // Overrides the `padding`s set in @material-ui/core/Button/Button.js
      containedSizeSmall: { fontSize: undefined },
      containedSizeLarge: { fontSize: undefined, padding: "10px 24px" },
      outlinedSizeSmall: { fontSize: undefined },
      outlinedSizeLarge: { fontSize: undefined, padding: "8px 22px" },

      // Remove box shadows for filled buttons
      // Overrides the `boxShadow`s set in @material-ui/core/Button/Button.js
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          "@media (hover: none)": { boxShadow: "none" },
        },
        "&$focusVisible": { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
      },

      // Set border to 2px and alpha to 100% for outlined-style buttons
      // Overrides the `border`s set in @material-ui/core/Button/Button.js
      outlined: {
        borderWidth: "2px",
        "&:disabled": { borderWidth: "2px" },
      },
      outlinedPrimary: {
        borderWidth: "2px",
        borderColor: palette.primary.main,
        "&:hover": { borderWidth: "2px" },
      },
      outlinedSecondary: {
        borderWidth: "2px",
        borderColor: palette.secondary.main,
        "&:disabled": { borderWidth: "2px" },
      },
    },
  },
  props: {
    // Only use a single button size
    MuiButton: { size: "large" },
  },
};

export default theme;
