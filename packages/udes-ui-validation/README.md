## @udes-ui/validation

Library providing a validator for fields. Example provided for a React component
 using Material UI and TypeScript.

#### Example usage

```tsx
import React, { useState } from "react";
import FormValidator, { changeHandler } from "@udes-ui/validation";
// Note: Until we release fields TextField will need to follow the component
// design at test_utils/testComponent/form/textField.tsx
import { TextField } from "./_path_to_textField";

const Material: React.FC = () => {
  const [field, setfield] = useState("");
  const [fieldError, setfieldError] = useState(false);
  const [fieldValidity, setFieldValidity] = useState(true);

  const validators = [
    {
      field: "field",
      method: "isEmpty",
      validWhen: false,
      message: "Enter a value",
    },
  ];

  const fieldSetter = [
    {
      method: setfield,
      invalid: "",
      valid: undefined,
    },
    {
      method: setFieldValidity,
      invalid: false,
      valid: true,
    },
    {
      method: setfieldError,
      invalid: "", // The invalid field is set within changeHandler
      valid: false,
    },
  ];

  const validator = new FormValidator(validators);

  function handleFieldChange(event): void {
    changeHandler(
      event,
      fieldSetter,
      setfield,
      "field",
      setfieldError,
      validator,
    );
  }

  return (
    <TextField
      name="field"
      value={field}
      label="field"
      is-valid={fieldValidity}
      error={fieldError}
      onChange={handleFieldChange}
    />
  );
};
```

Similar method exist for number fields.

See the validators currently available: https://www.npmjs.com/package/validator

#### Next Steps

Extend library to cover entire form validation, which will include the option to
disable submit buttons and the submit form event.
