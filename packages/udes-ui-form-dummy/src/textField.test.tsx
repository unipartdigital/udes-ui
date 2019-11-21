import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextField from "./textField";

test("Renders the field label", () => {
  const { container, getByText } = render(
    <TextField
      name="fieldname"
      label="Field Label"
      value="val"
      onChange={(): void => null}
    />,
  );
  expect(getByText("Field Label")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <label>
      Field Label
    </label>
  `);
});
