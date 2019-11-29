import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

interface Props {
  /** Defaults to `"text"` */
  type?: string;
  "data-testid"?: string;

  // Form input
  /** Also doubles as an `id`, allowing the label to be linked correctly. */
  name: string;
  value?: string;
  autoFocus?: boolean;

  // Labelling
  /**
   * Required under Material Design guidelines:
   * https://material.io/components/text-fields/#anatomy
   */
  label: string;

  // Appearance
  // TODO: Named colors from theme?
  // NOTE: Variant set to any to allow for modification of the component,
  // specific typing results in an error, interaction with the TS of the
  // underlying TextField from MaterialUI believed culprit (only taking single
  // values).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant?: any;

  // Layout
  /** If `true`, the input will take up the full width of its container. */
  fullWidth?: boolean;

  // States
  disabled?: boolean;
  error?: boolean | string;
  "is-valid"?: boolean;

  // Callbacks
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = (props: Props) => (
  // NB: Props are in roughly the same order as above
  <MuiTextField
    type={props.type}
    InputProps={{
      inputProps: {
        "data-testid": props["data-testid"],
        "is-valid": props["is-valid"],
      },
    }}
    id={props.name}
    name={props.name}
    value={props.value}
    autoFocus={props.autoFocus}
    label={props.label}
    variant={props.variant}
    fullWidth={props.fullWidth}
    disabled={props.disabled}
    error={props.error !== undefined && props.error !== false}
    helperText={typeof props.error == "string" ? props.error : undefined}
    onChange={props.onChange}
  />
);

export default TextField;
