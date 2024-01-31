import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { WorkContextProvider } from "../Context/WorkContext";
import WorkInputs from "../components/Forms/Work/Form&Input/WorkInput";
import { workInputs } from "../test-utils/work-inputs";

beforeEach(() => {
  render(
    <WorkContextProvider>
      <WorkInputs />
    </WorkContextProvider>
  );
});

test("should be able to type in work inputs", async () => {
  const { companyName, jobTitle, city, country, startDate, endDate } =
    workInputs({
      companyname: "Company 1",
      jobtitle: "Job Title 1",
      cityname: "City 1",
      countryname: "Country 1",
      startdate: "2021-01-01",
      enddate: "2021-01-01",
    });

  const wrapper = document.getElementById("work");
  const desc = wrapper.querySelector(".ql-editor");

  await act(async () => {
    await fireEvent.change(desc, {
      target: { textContent: "Software Development" },
    });
    expect(companyName.value).toBe("Company 1");
    expect(jobTitle.value).toBe("Job Title 1");
    expect(city.value).toBe("City 1");
    expect(country.value).toBe("Country 1");
    expect(startDate.value).toBe("2021-01-01");
    expect(endDate.value).toBe("2021-01-01");
    expect(desc.textContent).toBe("Software Development");
  });
});

test("should be able to see if work inputs setted correctly in localStorage", async () => {
  workInputs({
    companyname: "Company 1",
    jobtitle: "Job Title 1",
    cityname: "City 1",
    countryname: "Country 1",
    startdate: "2021-01-01",
    enddate: "2021-01-01",
  });

  const wrapper = document.getElementById("work");
  const desc = wrapper.querySelector(".ql-editor");
  await act(async () => {
    await fireEvent.change(desc, {
      target: { textContent: "Software Development" },
    });
  });
  const getValues = JSON.parse(localStorage.getItem("workStates"));
  expect(getValues.companyName).toBe("Company 1");
  expect(getValues.jobTitle).toBe("Job Title 1");
  expect(getValues.city).toBe("City 1");
  expect(getValues.country).toBe("Country 1");
  expect(getValues.from).toBe("2021-01-01");
  expect(getValues.to).toBe("2021-01-01");
  expect(getValues.workDetails).toBe("<p>Software Development</p>");
});
