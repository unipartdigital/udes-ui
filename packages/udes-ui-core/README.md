## @udes-ui/core

Core UDES React components, built using Material UI.

### Reference

#### createModifiedTheme

`createModifiedTheme(Theme, ThemeOptions) => Theme`

Overrides the given Material UI `Theme` according to the provided
`ThemeOptions` and returns the modified `Theme`.

See `createMuiTheme` for the format of `ThemeOptions`:
https://material-ui.com/customization/theming/#api

#### ThemeProvider

Acts as both a Material UI
[ThemeProvider](https://material-ui.com/customization/theming/) and a
styled-components
[ThemeProvider](https://www.styled-components.com/docs/advanced) component.
This is required to enable other components in this package to work.

Provides the default UDES theme. The theme can be overidden by specifying the
`theme` prop with a theme returned by `createModifiedTheme`.

| Prop Name | Type     | Default | Description |
|-----------|----------|---------|-------------|
| `theme`   | `Theme?` | `require("@udes-ui/core").theme` | The Material UI theme that child components will use. |

```jsx
<ThemeProvider>...</ThemeProvider>
```
```jsx
import { theme } from "@udes-ui/core";

const newTheme = createModifiedTheme(theme, {
  typography: {
    h1: {
      fontSize: "48px"
    }
  }
})

<ThemeProvider theme={theme}>...</ThemeProvider>
```