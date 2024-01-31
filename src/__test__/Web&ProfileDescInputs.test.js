import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PersonalStatesContextProvider } from "../Context/PersonalContext";
import Profile from "../components/Forms/Personal/Forms&Inputs/Profile";
import PersonalForm from "../components/Forms/Personal/Forms&Inputs/PersonalForm";

test("should be able to type in web input", async () => {
  render(
    <PersonalStatesContextProvider>
      <PersonalForm />
    </PersonalStatesContextProvider>
  );
  const web = screen.getByLabelText("Web");
  fireEvent.change(web, { target: { value: "Programmer" } });
  // await act(() => {
    expect(web.value).toBe("Programmer");
  // });
});

test("should be able to see if web input is setted in localStorage correctly", async () => {
  render(
    <PersonalStatesContextProvider>
      <PersonalForm />
    </PersonalStatesContextProvider>
  );
  const web = screen.getByLabelText("Web");
  fireEvent.change(web, { target: { value: "Software Development" } });
  // await act(() => {
    const getValues = JSON.parse(localStorage.getItem("personalState"));
    expect(getValues.web).toBe("Software Development");
  // });
});

test("should be able to type profile description", async () => {
  render(
    <PersonalStatesContextProvider>
      <Profile />
    </PersonalStatesContextProvider>
  );

  const wrapper = document.getElementById("profile");
  const desc = wrapper.querySelector(".ql-editor");
  await act(async () => {
    await fireEvent.change(desc, {
      target: { textContent: "Software Development" },
    });
  });
  expect(desc.textContent).toBe("Software Development");
});

test("should be able to see if desc value is correctly setted in localStorage", async () => {
  render(
    <PersonalStatesContextProvider>
      <Profile />
    </PersonalStatesContextProvider>
  );
  const wrapper = document.getElementById("profile");
  const desc = wrapper.querySelector(".ql-editor");
  await act(async () => {
    await fireEvent.change(desc, {
      target: { textContent: "Software Development" },
    });
  });
  const getValues = JSON.parse(localStorage.getItem("personalState"));
  expect(getValues.profileDescription).toBe("<p>Software Development</p>");
});
