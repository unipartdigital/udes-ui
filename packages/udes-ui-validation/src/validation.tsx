import validator from "validator";

/*
   Based on code found at
https://medium.com/code-monkey/client-side-form-validation-in-react-40e367de47ba

   Default validators provided by the above package can be found at
   https://www.npmjs.com/package/validator. It provides most common use cases
   for validation of text. However in the case that a sufficient rule is not
   provided a custom rule can be provided to the FormValidator by way of a
   function.

   The FormValidator accepts the below data structure for declaring fields, the
   rules which apply to them and the message to be returned:
        [
            {
                field: string,
                method: string | Function,
                args: Array<any>,
                validWhen: boolean,
                message: string,
            },
        ]
   This takes an array of key, value objects which refer to the field to be
   acted on.

   The method to be used on the field and any arguments required by the method.

   The arguments may include values from other fields within a component; this
   is useful when comparison between fields is necessary before a condition will
   be met, such as when confirming a password after already entering it once.

   The condition upon which the field is valid with respect to the value
   returned by the method (i.e. if the result of the method should be false to
   make the field valid this validWhen should be set to false).

   The message to be passed back in the case that the field is invalid.

   Please note that the field to be validated cannot be referred to as isValid
   as this is reserved for specifying if the field is valid in the validator.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
class FormValidator {
  validations: Array<{
    field: string;
    method: string | Function;
    args: Array<any>;
    validWhen: boolean;
    message: string;
  }>;

  constructor(validations) {
    // validations is an array of rules specific to a form
    this.validations = validations;
  }

  validate(state): any {
    // start out assuming the field is valid
    const validation = this.valid();
    // go through each validation rule in array
    this.validations.forEach((rule) => {
      // check that there is a value for the field in the state object
      // corresponding to the field in the rule
      if (state[rule.field] === undefined) {
        return validation;
      }
      // if the field isn't already marked invalid by an earlier rule proceed
      // else skip the rule as the field is already invalid
      if (!validation[rule.field].isInvalid) {
        // determine the field value, the method to invoke and
        // optional args from the rule definition
        const fieldValue = state[rule.field].toString();
        // if there are no args provide empty array for args
        const args = rule.args || [];
        // check whether we have passed a string or a function, in case of a
        // string pass it to the validator imported from validator package
        // otherwise use the defined function
        const validationMethod =
          typeof rule.method === "string"
            ? validator[rule.method]
            : rule.method;
        // call the validation_method with the current field value
        // as the first argument, any additional arguments, and the
        // whole state as a final argument, allows for all the state values to
        // be used in the validation method, useful for things like password
        // entry validation (i.e. did the second entry match the first).
        // If the result doesn't match the rule.validWhen property, then
        // modify the validation object for the field and set the isValid
        // field to false
        if (validationMethod(fieldValue, ...args) !== rule.validWhen) {
          validation[rule.field] = {
            isInvalid: true,
            message: rule.message,
          };
          validation.isValid = false;
        }
      }
    });
    return validation;
  }

  /** Function to create a validation object (defaults to valid state).
   * Please note that the field to be validated cannot be referred to as isValid
   */
  valid(): any {
    const validation = {};

    this.validations.map(
      (rule) => (validation[rule.field] = { isInvalid: false, message: "" }),
    );
    return { isValid: true, ...validation };
  }
}

/** Function to generically process changes and apply any extra functionality.
 * This function takes in a fieldValueSetter key value defining the action to be
 * used with the events target value, an error key to define a field for
 * receiving the message from the validator the validator object and a
 * setters object taking the form as below:
 *
 * [
 *   {
 *       method: setter function: function,
 *       valid: value if valid or empty: string | number | undefined,
 *       invalid: value if invalid or empty: string | number | undefined,
 *   }
 * ]
 * Please note that the field to be validated cannot be referred to as isValid.
 */

export function changeHandler(
  event: any,
  actions: Array<{
    method: Function;
    valid: boolean | string | number | undefined;
    invalid: boolean | string | number | undefined;
  }>,
  fieldValueSetter: Function,
  fieldValueKey: string,
  errorKey: Function | undefined,
  validator: FormValidator,
): void {
  // Set the value for the primary field value
  fieldValueSetter(event.target.value);
  // Validate the value, if the field requires information from other fields,
  // provide them in the args of validator (see given validator)
  const fieldObject = {};
  fieldObject[fieldValueKey] = event.target.value;
  const validation = validator.validate({ ...fieldObject });
  // Apply setter methods according to validity state
  const validityState = validation.isValid ? "valid" : "invalid";
  actions.forEach((action) => {
    if (action[validityState] !== undefined) {
      if (action["method"] === errorKey && validityState === "invalid") {
        action["method"](validation[fieldValueKey]["message"]);
      } else {
        action["method"](action[validityState]);
      }
    }
  });
  // To perform any extra logic, override the function and call super, then
  // execute custom behaviour. Alternatively this logic can be easily
  // recreated
}

// TODO Rho: Perhaps we want to add similar methods for onSubmit, onBlur, etc?
/* eslint-enable @typescript-eslint/no-explicit-any */

export default FormValidator;
