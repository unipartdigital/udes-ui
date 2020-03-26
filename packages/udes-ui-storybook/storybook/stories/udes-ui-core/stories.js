import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, select } from "@storybook/addon-knobs";
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
      const size = select(
        "Size",
        {
          Small: "small",
          Medium: "medium",
          Large: "large",
        },
        "large",
      );

      return (
        <Button
          variant={variant.value}
          fullWidth={fullWidth}
          disabled={disabled}
          loading={loading}
          onClick={action("clicked")}
          size={size}
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
          <Button variant="primary" fullWidth size="small">
            Primary Small
          </Button>
          <Button variant="primary" fullWidth disabled size="small">
            Primary Small Disabled
          </Button>
          <Button variant="primary" fullWidth loading size="small">
            Primary Small Loading
          </Button>
          <Button variant="secondary" fullWidth size="small">
            Secondary Small
          </Button>
          <Button variant="secondary" fullWidth disabled size="small">
            Secondary Small Disabled
          </Button>
          <Button variant="secondary" fullWidth loading size="small">
            Secondary Small Loading
          </Button>

          <Button variant="primary" fullWidth size="medium">
            Primary Medium
          </Button>
          <Button variant="primary" fullWidth disabled size="medium">
            Primary Medium Disabled
          </Button>
          <Button variant="primary" fullWidth loading size="medium">
            Primary Medium Loading
          </Button>
          <Button variant="secondary" fullWidth size="medium">
            Secondary Medium
          </Button>
          <Button variant="secondary" fullWidth disabled size="medium">
            Secondary Medium Disabled
          </Button>
          <Button variant="secondary" fullWidth loading size="medium">
            Secondary Medium Loading
          </Button>

          <Button variant="primary" fullWidth>
            Primary Default Large
          </Button>
          <Button variant="primary" fullWidth disabled>
            Primary Default Large Disabled
          </Button>
          <Button variant="primary" fullWidth loading>
            Primary Default Large Loading
          </Button>
          <Button variant="secondary" fullWidth>
            Secondary Default Large
          </Button>
          <Button variant="secondary" fullWidth disabled>
            Secondary Default Large Disabled
          </Button>
          <Button variant="secondary" fullWidth loading>
            Secondary Default Large Loading
          </Button>
        </VerticalLayout>
      );
    },
    storyName: "All",
    storyPath: "@udes-ui/core|Button",
  },
];
