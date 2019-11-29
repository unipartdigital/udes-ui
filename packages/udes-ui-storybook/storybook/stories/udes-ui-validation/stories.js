/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import TextField from "./form/textField";
import NumberField from "./form/numberField";
import FormValidator, {
  changeHandler,
} from "../../../../udes-ui-validation/src/validation";
import { text, boolean } from "@storybook/addon-knobs";

export default [
  {
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      const numberFieldNameKnob = text("Number Field Name", "Number Field");
      const textFieldNameKnob = text("Text Field Name", "Text Field");
      const numberRule1 = boolean("Number field maximum 10 digits rule", true);
      const numberRule2 = boolean("Number field cannot contain a 1 rule", true);
      const numberRule3 = boolean("Number field sum of digits < 10 rule", true);
      const textRule1 = boolean("Text field cannot accept a t rule", true);
      const textRule2 = boolean("Text field cannot be empty rule", true);

      const [numberField, setNumber] = useState(0);
      const [numberValidity, setNumberValidity] = useState(true);
      const [errorNumberState, setNumberErrorState] = useState(false);
      const [focus, setFocus] = useState(false);
      const [textField, setText] = useState("hello");
      const [textValidity, setTextValidity] = useState(true);
      const [errorTextState, setTextErrorState] = useState(false);

      function summation(number, max) {
        let value = 0;
        for (let i = 0; i < number.length; i++) {
          value += Number(number.charAt(i));
        }
        return value < Number(max) ? true : false;
      }

      const numberValidator1 = numberRule1
        ? {
            field: "numberInput",
            method: "isLength",
            args: [{ min: undefined, max: 10 }],
            validWhen: true,
            message: "Must be no more than 10 digits",
          }
        : {};

      const numberValidator2 = numberRule2
        ? {
            field: "numberInput",
            method: "contains",
            args: ["1"],
            validWhen: false,
            message: "Cannot contain a 1",
          }
        : {};

      const numberValidator3 = numberRule3
        ? {
            field: "numberInput",
            method: summation,
            args: ["10"],
            validWhen: true,
            message: "Cannot be greater than 10",
          }
        : {};

      const textValidator1 = textRule1
        ? {
            field: "textInput",
            method: "contains",
            args: ["t"],
            validWhen: false,
            message: "Cannot contain a t",
          }
        : {};

      const textValidator2 = textRule2
        ? {
            field: "textInput",
            method: "isEmpty",
            validWhen: false,
            message: "Cannot be empty",
          }
        : {};

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

      function handleNumberChange(event) {
        changeHandler(
          event,
          numberSetter,
          setNumber,
          "numberInput",
          setNumberErrorState,
          validator,
        );
      }

      function handleTextChange(event) {
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
            label={textFieldNameKnob}
            name="Text Field"
            fullWidth={true}
            value={textField}
            error={errorTextState}
            onChange={handleTextChange}
            is-valid={textValidity}
            data-testid="materialTextField"
          />
          <NumberField
            label={numberFieldNameKnob}
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
    },
    storyName: "No Error",
    storyPath: "@udes-ui/validation|Validator",
  },
  {
    // eslint-disable-next-line react/display-name
    renderStory: () => {
      const numberError = boolean("Set a number error", true);
      const textError = boolean("Set a text error", true);
      return (
        <div>
          <TextField
            label="Text Field"
            name="Text Field"
            fullWidth={true}
            error={textError ? "Oh no, a text error." : undefined}
          />
          <NumberField
            label="Number Field"
            name="Number Field"
            fullWidth={true}
            error={numberError ? "Oh no, a number error." : undefined}
          />
        </div>
      );
    },
    storyName: "Error",
    storyPath: "@udes-ui/validation|Validator",
  },
];
