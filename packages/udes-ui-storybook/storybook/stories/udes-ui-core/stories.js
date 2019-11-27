import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Button, VerticalLayout } from "../../../../udes-ui-core/src";

const buttonVariants = [
  { name: "Primary", value: "primary" },
  { name: "Secondary", value: "secondary" },
];

export default [
  ...buttonVariants.map((variant) => ({
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      const content = text("Content", "Submit");
      const fullWidth = boolean("Full width", false);
      const disabled = boolean("Disabled", false);
      const loading = boolean("Loading", false);

      return (
        <Button
          variant={variant.value}
          fullWidth={fullWidth}
          disabled={disabled}
          loading={loading}
          onClick={action("clicked")}
        >
          {content}
        </Button>
      );
    },
    storyName: variant.name,
    storyPath: "@udes-ui/core|Button",
  })),
  {
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      return (
        <VerticalLayout>
          <Button variant="primary" fullWidth>
            Primary
          </Button>
          <Button variant="primary" fullWidth disabled>
            Primary Disabled
          </Button>
          <Button variant="primary" fullWidth loading>
            Primary Loading
          </Button>
          <Button variant="secondary" fullWidth>
            Secondary
          </Button>
          <Button variant="secondary" fullWidth disabled>
            Secondary Disabled
          </Button>
          <Button variant="secondary" fullWidth loading>
            Secondary Loading
          </Button>
        </VerticalLayout>
      );
    },
    storyName: "All",
    storyPath: "@udes-ui/core|Button",
  },
];
