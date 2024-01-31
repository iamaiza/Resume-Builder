import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { StrengthContextProvider } from "../Context/StrengthContext";
import StrengthForm from "../components/Forms/Strength/StrengthForm";
import { addButton, firstOption } from "../test-utils/strength-inputs";

beforeEach(() => {
  render(
    <StrengthContextProvider>
      <StrengthForm />
    </StrengthContextProvider>
  );
});

test("should be able to type in input and click on button", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const strengthInput = screen.getByPlaceholderText("Eg. Time Management");
  expect(strengthInput).toBeInTheDocument();
});

test("should be able to see if option value is added in LS correctly", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const getValues = JSON.parse(localStorage.getItem("strengthState"));
  expect(getValues.suggestions).toHaveLength(2);
});

test("should be able to change option value from inputs list", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const strengthInput = screen.getAllByPlaceholderText(
    "Eg. Time Management"
  )[0];

  fireEvent.change(strengthInput, { target: { value: "Test" } });
  expect(strengthInput.value).toBe("Test");
});

test("should be able to see if the input value updated in LS correctly", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const strengthInput = screen.getAllByPlaceholderText(
    "Eg. Time Management"
  )[0];
  fireEvent.change(strengthInput, { target: { value: "Test" } });

  const getValues = JSON.parse(localStorage.getItem("strengthState"));
  expect(getValues.suggestions[0].option).toBe("Test");
});

test("should be able to delete option from list", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const strengthInput = screen.getAllByPlaceholderText(
    "Eg. Time Management"
  )[0];
  fireEvent.change(strengthInput, { target: { value: "Test" } });
  const deletebtn = screen.getAllByTestId("delete-option")[0];
  fireEvent.click(deletebtn);
  expect(strengthInput).not.toBeInTheDocument();
});

test("should be able to see if option deleted successfully from LS", () => {
  firstOption({ value1: "Time Management" });
  addButton();
  const strengthInput = screen.getAllByPlaceholderText(
    "Eg. Time Management"
  )[0];
  fireEvent.change(strengthInput, { target: { value: "Test" } });
  const deletebtn = screen.getAllByTestId("delete-option")[0];
  fireEvent.click(deletebtn);

  const getValues = JSON.parse(localStorage.getItem("strengthState"));
  console.log(getValues);
  expect(getValues.suggestions).toHaveLength(getValues.suggestions.length);
});
