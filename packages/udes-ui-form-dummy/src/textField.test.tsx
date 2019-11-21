import * as React from "react";
import { shallow } from "enzyme";

import TextField from "./textField";

it("Renders the field label", () => {
  const result = shallow(
    <TextField name="fieldname" label="Field Label" value="val" />,
  ).contains(<label>Field Label</label>);
  expect(result).toBeTruthy();
});
