import React from "react";
import { render } from "@testing-library/react";
import TitleInput from "../components/Forms/Personal/Forms&Inputs/TitleInput";
import { PersonalStatesContextProvider } from "../Context/PersonalContext";
import { act } from "react-dom/test-utils";
import { titleInputs } from "../test-utils/title-inputs";

const context = {
  firstName: "Jane",
  lastName: "Doe",
  titleBefore: "Mr.",
  titleAfter: "Mrs.",
  phone: "1234567890",
  email: "janeDoe22@gmail.com",
};
beforeEach(() => {
  render(
    <PersonalStatesContextProvider>
      <TitleInput />
    </PersonalStatesContextProvider>
  );
});

test("should be able to write in inputs", async () => {
  const { firstName, lastName, titleAfter, titleBefore, phone, email } =
    titleInputs({
      firstname: "John",
      lastname: "Willson",
      titlebefore: "Dr.",
      titleafter: "Speaker",
      phoneNumber: "1234567890",
      emailAddress: "johnDoe233@gmail.com",
    });

  // await act(() => {
    expect(firstName.value).toBe("John");
    expect(lastName.value).toBe("Willson");
    expect(titleBefore.value).toBe("Dr.");
    expect(titleAfter.value).toBe("Speaker");
    expect(phone.value).toBe("1234567890");
    expect(email.value).toBe("johnDoe233@gmail.com");
  // });
});

test("should be able to see if values setted in localStorage correctly", async () => {
  titleInputs({
    firstname: "John",
    lastname: "Willson",
    titlebefore: "Dr.",
    titleafter: "Speaker",
    phoneNumber: "1234567890",
    emailAddress: "johnDoe233@gmail.com",
  });

  // await act(() => {
    const getValues = JSON.parse(localStorage.getItem("personalState"));
    expect(getValues.firstName).toBe("John");
    expect(getValues.lastName).toBe("Willson");
    expect(getValues.titleBefore).toBe("Dr.");
    expect(getValues.titleAfter).toBe("Speaker");
    expect(getValues.phone).toBe("1234567890");
    expect(getValues.email).toBe("johnDoe233@gmail.com");
  // });
});
