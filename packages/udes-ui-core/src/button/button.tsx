import React from "react";
import styled from "styled-components";
import { CircularProgress, Button as MUIButton } from "@material-ui/core";

interface Props {
  /**
   * Form behaviour.
   *
   * @default "button"
   */
  type?: "submit" | "reset" | "button";
  /** The `button`'s `data-testid`, for use with DOM / React Testing Library. */
  "data-testid"?: string;

  // Form input
  /** Name for form data. */
  name?: string;
  /** Value for form data. */
  value?: string;

  // Appearance
  /**
   * UDES button variant to use.
   *
   * @default "primary"
   */
  variant?: "primary" | "secondary";

  // Layout
  /** If `true`, the button will take up the full width of its container. */
  fullWidth?: boolean;

  // States
  disabled?: boolean;
  loading?: boolean;

  // Callbacks
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  // Content
  children?: React.ReactNode;
}

// Loading state based off the code at
// https://material-ui.com/components/progress/#interactive-integration
const CenteredOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0; /* Prevent extra vertical space */
`;

export const Button: React.FC<Props> = (props: Props) => (
  // NB: Props are in roughly the same order as above
  <MUIButton
    type={props.type}
    data-testid={props["data-testid"]}
    name={props.name}
    value={props.value}
    variant={props.variant !== "secondary" ? "contained" : "outlined"}
    color="primary"
    fullWidth={props.fullWidth}
    disabled={props.disabled || props.loading}
    onClick={props.onClick}
  >
    {props.children}
    {props.loading && (
      <CenteredOverlay>
        <CircularProgress data-testid="loading" size={24} />
      </CenteredOverlay>
    )}
  </MUIButton>
);

export default Button;
