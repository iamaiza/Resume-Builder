import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PersonalStatesContextProvider } from "../Context/PersonalContext";
import LocationInput from "../components/Forms/Personal/Forms&Inputs/LocationInput";
import { locationInput } from "../test-utils/location-test";

beforeEach(() => {
  render(
    <PersonalStatesContextProvider>
      <LocationInput />
    </PersonalStatesContextProvider>
  );
});

test("should be able to write in inputs", async () => {
  const { street, city, postal, country } = locationInput({
    streetNo: "King Street",
    cityname: "Hawaii",
    postCode: "96718",
    countryname: "USA",
  });

  // await act(() => {
    expect(street.value).toBe("King Street");
    expect(city.value).toBe("Hawaii");
    expect(postal.value).toBe("96718");
    expect(country.value).toBe("USA");
  // });
});

test("should be able to see if input values setted correctly in localStorage", async () => {
  locationInput({
    streetNo: "King Street",
    cityname: "Hawaii",
    postCode: "96718",
    countryname: "USA",
  });

  // await act(() => {
    const getValues = JSON.parse(localStorage.getItem("personalState"))
    expect(getValues.street).toBe("King Street");
    expect(getValues.city).toBe("Hawaii");
    expect(getValues.postal).toBe("96718");
    expect(getValues.country).toBe("USA");
  // })
});
