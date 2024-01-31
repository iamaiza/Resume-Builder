"use client";

import React from "react";
import { stripHtmlTags } from "../utils";


const { createContext, useState } = require("react");

const context = {
  firstName: "",
  lastName: "",
  titleBefore: "",
  titleAfter: "",
  phone: "",
  email: "",
  dob: "",
  nationality: "",
  street: "",
  city: "",
  postal: "",
  country: "",
  web: "",
  profileDescription: "",
  changeInputs: () => {},
};

const PersonalStatesContext = createContext();

const PersonalStatesContextProvider = ({ children }) => {
  const storedStateValues = JSON.parse(localStorage.getItem("personalState"));
  const [firstName, setFirstName] = useState(
    storedStateValues?.firstName || ""
  );
  const [lastName, setLastName] = useState(
    storedStateValues?.lastName || ""
  );
  const [titleBefore, setTitleBefore] = useState(
    storedStateValues?.titleBefore || ""
  );
  const [titleAfter, setTitleAfter] = useState(
    storedStateValues?.titleAfter || ""
  );
  const [phone, setPhone] = useState(storedStateValues?.phone || "");
  const [email, setEmail] = useState(
    storedStateValues?.email || ""
  );
  const [dob, setDob] = useState(storedStateValues?.dob || "");
  const [nationality, setNationality] = useState(
    storedStateValues?.nationality || ""
  );
  const [street, setStreet] = useState(storedStateValues?.street || "");
  const [city, setCity] = useState(storedStateValues?.city || "");
  const [postal, setPostal] = useState(storedStateValues?.postal || "");
  const [country, setCountry] = useState(storedStateValues?.country || "");
  const [web, setWeb] = useState(storedStateValues?.web || "");
  const [profileDescription, setProfileDescription] = useState(
    storedStateValues?.profileDescription || ""
  );

  const changeInputsHandler = (id, value) => {
    switch (id) {
      case "first-name":
        setFirstName(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, firstName: value })
        );
        break;
      case "last-name":
        setLastName(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, lastName: value })
        );
        break;
      case "title-before":
        setTitleBefore(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, titleBefore: value })
        );
        break;
      case "title-after":
        setTitleAfter(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, titleAfter: value })
        );
        break;
      case "phone":
        setPhone(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, phone: value })
        );
        break;
      case "email":
        setEmail(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, email: value })
        );
        break;
      case "DOB":
        setDob(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, dob: value })
        );
        break;
      case "nationality":
        setNationality(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, nationality: value })
        );
        break;
      case "street":
        setStreet(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, street: value })
        );
        break;
      case "city":
        setCity(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, city: value })
        );
        break;
      case "postal":
        setPostal(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, postal: value })
        );
        break;
      case "country":
        setCountry(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, country: value })
        );
        break;
      case "web":
        setWeb(value);
        localStorage.setItem(
          "personalState",
          JSON.stringify({ ...storedStateValues, web: value })
        );
        break;
      case "profile-desc":
        setProfileDescription(value);
        const isEmptyOrOnlyEmptyTags = !stripHtmlTags(value).trim();
        localStorage.setItem(
          "personalState",
          JSON.stringify({
            ...storedStateValues,
            profileDescription: isEmptyOrOnlyEmptyTags ? "" : value,
          })
        );
        break;
    }
  };

  const contextValues = {
    firstName,
    lastName,
    titleBefore,
    titleAfter,
    phone,
    email,
    dob,
    nationality,
    street,
    city,
    postal,
    country,
    web,
    profileDescription,
    changeInputs: changeInputsHandler,
  };

  return (
    <PersonalStatesContext.Provider value={contextValues}>
      {children}
    </PersonalStatesContext.Provider>
  );
};

export default PersonalStatesContext;
export { PersonalStatesContextProvider };
