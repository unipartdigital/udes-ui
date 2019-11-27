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

#### Button

A button with an integrated loading spinner, available in `primary` and
`secondary` variants.

| Prop Name       | Type      | Default    | Description |
|-----------------|-----------|------------|-------------|
| `type`          | <code>"submit" &#124; "reset" &#124; "button"</code> | `"button"` | Form behaviour. |
| `"data-testid"` | `string?` | -          | The `button`'s `data-testid`, for use with DOM / React Testing Library. |
| `name`          | `string?` | -          | Name for form data.  |
| `value`         | `string?` | -          | Value for form data. |
| `variant`       | <code>"primary" &#124; "secondary"</code> | `"primary"` | UDES button variant to use. |
| `fullWidth`     | `boolean` | `false`    | If `true`, the button will take up the full width of its container. |
| `disabled`      | `boolean` | `false`    | -           |
| `loading`       | `boolean` | `false`    | -           |
| `onClick`       | `(e: React.MouseEvent<HTMLButtonElement>) => void` | -       | -           |

```jsx
<Button onClick={() => doConfirm()}>Confirm</Button>
```

#### VerticalLayout

Stacks all children vertically, with spacing between them.

| Prop Name | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| `spacing` | `number?` |     `2` | The spacing to use, as a multiple of the Material UI theme's base spacing. |

```jsx
<VerticalLayout>
  <Button>Accept</Button>
  <Button>Cancel</Button>
</VerticalLayout>
```