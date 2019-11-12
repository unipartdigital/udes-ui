import * as React from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
}

const TextField = (props: Props) => (
  <>
    <label>{props.label}</label>
    <input data-testid={props["data-testid"]} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.label} />
  </>
);

export default TextField;