import { screen, fireEvent } from "@testing-library/react";

const addButton = () => {
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
};

const firstOption = ({ value1 }) => {
  const optionInput = screen.getByTestId("option");
  if (value1) {
    fireEvent.change(optionInput, { target: { value: value1 } });
  }

  return { optionInput }
};

export { addButton, firstOption };
