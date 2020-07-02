import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import Textfield from "../../../../udes-ui-form-dummy/src";

export default {
  title: "@udes-ui/form-dummy|Textfield",
  decorators: [withKnobs],
};

export const Basic = () => {
  const name = text("Name", "dummy");
  const label = text("Label", "Field Label");
  const value = text("Value", "");

  return (
    <Textfield name={name} label={label} value={value} onChange={() => null} />
  );
};
