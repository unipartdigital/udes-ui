import React from "react";
import { text } from "@storybook/addon-knobs";
import Textfield from "../../../../udes-ui-form-dummy/src";

export default [
  {
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      const name = text("Name", "dummy");
      const label = text("Label", "Field Label");
      const value = text("Value", "");

      return (
        <Textfield
          name={name}
          label={label}
          value={value}
          onChange={() => null}
        />
      );
    },
    storyName: "Basic",
    storyPath: "@udes-ui/form-dummy|Textfield",
  },
];
