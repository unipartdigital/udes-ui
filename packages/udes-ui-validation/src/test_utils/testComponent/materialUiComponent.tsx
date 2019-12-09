import React, { useState } from "react";
import TextField from "./form/textField";
import NumberField from "./form/numberField";
import FormValidator, { changeHandler } from "../../validator/validation";

const Material: React.FC = () => {
  const [numberField, setNumber] = useState(0);
  const [numberValidity, setNumberValidity] = useState(true);
  const [errorNumberState, setNumberErrorState] = useState(false);
  const [focus, setFocus] = useState(false);
  const [textField, setText] = useState("hello");
  const [textValidity, setTextValidity] = useState(true);
  const [errorTextState, setTextErrorState] = useState(false);

  function summation(number: string, max: string): boolean {
    let value = 0;
    for (let i = 0; i < number.length; i++) {
      value += Number(number.charAt(i));
    }
    return value < Number(max) ? true : false;
  }

  const numberValidator1 = {
    field: "numberInput",
    method: "isLength",
    args: [{ min: undefined, max: 10 }],
    validWhen: true,
    message: "Must be no more than 10 digits",
  };

  const numberValidator2 = {
    field: "numberInput",
    method: "contains",
    args: ["1"],
    validWhen: false,
    message: "Cannot contain a 1",
  };

  const numberValidator3 = {
    field: "numberInput",
    method: summation,
    args: ["10"],
    validWhen: true,
    message: "Cannot be greater than 10",
  };

  const textValidator1 = {
    field: "textInput",
    method: "contains",
    args: ["t"],
    validWhen: false,
    message: "Cannot contain a t",
  };

  const textValidator2 = {
    field: "textInput",
    method: "isEmpty",
    validWhen: false,
    message: "Cannot be empty",
  };

  const validators = [
    numberValidator1,
    numberValidator2,
    numberValidator3,
    textValidator1,
    textValidator2,
  ];
  const validator = new FormValidator(validators);

  const numberSetter = [
    {
      method: setNumber,
      invalid: "",
      valid: undefined,
    },
    {
      method: setFocus,
      invalid: true,
      valid: undefined,
    },
    {
      method: setNumberValidity,
      invalid: false,
      valid: true,
    },
    {
      method: setNumberErrorState,
      invalid: "", // The invalid field is set within changeHandler
      valid: false,
    },
  ];

  const textSetter = [
    {
      method: setText,
      invalid: "default",
      valid: undefined,
    },
    {
      method: setTextValidity,
      invalid: false,
      valid: true,
    },
    {
      method: setTextErrorState,
      invalid: "", // The invalid field is set within changeHandler
      valid: false,
    },
  ];

  function handleNumberChange(event): void {
    changeHandler(
      event,
      numberSetter,
      setNumber,
      "numberInput",
      setNumberErrorState,
      validator,
    );
  }

  function handleTextChange(event): void {
    changeHandler(
      event,
      textSetter,
      setText,
      "textInput",
      setTextErrorState,
      validator,
    );
  }

  return (
    <div>
      <TextField
        label="Text Field"
        name="Text Field"
        fullWidth={true}
        value={textField}
        error={errorTextState}
        onChange={handleTextChange}
        is-valid={textValidity}
        data-testid="materialTextField"
      />
      <NumberField
        label="Number Field"
        name="Number Field"
        fullWidth={true}
        value={numberField}
        autoFocus={focus}
        onChange={handleNumberChange}
        is-valid={numberValidity}
        error={errorNumberState}
        data-testid="materialNumberField"
      />
    </div>
  );
};

export default Material;
