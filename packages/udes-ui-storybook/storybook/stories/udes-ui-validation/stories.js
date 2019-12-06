import React from "react";
// eslint-disable-next-line max-len
import Material from "./exampleComponent/materialUiComponent";
import { text } from "@storybook/addon-knobs";

export default [
  {
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      const name = text("Name", "dummy");
      const label = text("Label", "Field Label");
      const value = text("Value", "");

      return <Material name={name} label={label} value={value} />;
    },
    storyName: "Basic",
    storyPath: "@udes-ui/validation|Validator",
  },
];
