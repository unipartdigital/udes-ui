import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import MaterialComponent from "../exampleComponent/materialUiComponent";

afterEach(cleanup);

describe("Validator Material UI tests", () => {
  test("Valid state does not result in error", async () => {
    const testRenderer = render(<MaterialComponent />);
    const numberField = testRenderer.getByTestId("materialNumberField");
    expect(numberField["value"]).toBe("0");
    fireEvent.change(numberField, { target: { value: "2" } });
    expect(numberField["value"]).toBe("2");
    fireEvent.change(numberField, { target: { value: "3" } });
    expect(numberField["value"]).toBe("3");
  });

  test("Invalid state raises expected error", () => {
    const testRenderer = render(<MaterialComponent />);
    const numberField = testRenderer.getByTestId("materialNumberField");
    expect(numberField["value"]).toBe("0");
    fireEvent.change(numberField, { target: { value: "1" } });
    expect(numberField["value"]).toBe("");
    expect(testRenderer.getByText("Cannot contain a 1"));
  });

  test(
    "Invalid first state raises expected error and marks as invalid," +
      " preventing inspection of next rule",
    () => {
      const testRenderer = render(<MaterialComponent />);
      const numberField = testRenderer.getByTestId("materialNumberField");
      expect(numberField["value"]).toBe("0");
      fireEvent.change(numberField, { target: { value: "99999999999" } });
      expect(numberField["value"]).toBe("");
      expect(testRenderer.getByText("Must be no more than 10 digits"));
    },
  );

  test("Invalid state from custom function", () => {
    const testRenderer = render(<MaterialComponent />);
    const numberField = testRenderer.getByTestId("materialNumberField");
    expect(numberField["value"]).toBe("0");
    fireEvent.change(numberField, { target: { value: "444" } });
    expect(numberField["value"]).toBe("");
    expect(testRenderer.getByText("Cannot be greater than 10"));
  });

  test("Invalid state on Text field", () => {
    const testRenderer = render(<MaterialComponent />);
    const textField = testRenderer.getByTestId("materialTextField");
    expect(textField["value"]).toBe("hello");
    fireEvent.change(textField, { target: { value: "thanks" } });
    expect(textField["value"]).toBe("default");
    expect(testRenderer.getByText("Cannot contain a t"));
  });

  test("Rule with no arguments works correctly", () => {
    const testRenderer = render(<MaterialComponent />);
    const textField = testRenderer.getByTestId("materialTextField");
    expect(textField["value"]).toBe("hello");
    fireEvent.change(textField, { target: { value: "" } });
    expect(textField["value"]).toBe("default");
    expect(testRenderer.getByText("Cannot be empty"));
  });
});
