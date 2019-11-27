import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./button";

test("Renders the field label", () => {
  const { getByText } = render(<Button>Create</Button>);
  expect(getByText("Create")).toBeInTheDocument();
});

test("Renders as disabled", () => {
  const { getByText } = render(<Button disabled>Create</Button>);
  expect(getByText("Create").closest("button")).toBeDisabled();
});

test("Renders as loading", () => {
  const { getByTestId, getByText } = render(<Button loading>Create</Button>);
  expect(getByText("Create").closest("button")).toBeDisabled();
  expect(getByTestId("loading")).toBeInTheDocument();
});

test("Calls click callback", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Create</Button>);
  fireEvent.click(getByText("Create"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
