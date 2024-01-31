"use client";

import React from "react";
import { stripHtmlTags } from "../utils";
import { createContext, useState } from "react";

const WorkContext = createContext();

const WorkContextProvider = ({ children }) => {
  const storedStates = JSON.parse(localStorage.getItem("workStates"));
  const [companyName, setCompanyName] = useState(
    storedStates?.companyName || ""
  );
  const [jobTitle, setJobTitle] = useState(
    storedStates?.jobTitle || "Software Engineering"
  );
  const [city, setCity] = useState(storedStates?.city || "");
  const [country, setCountry] = useState(storedStates?.country || "");
  const [from, setFrom] = useState(storedStates?.from || "");
  const [to, setTo] = useState(storedStates?.to || "");
  const [checked, setChecked] = useState(storedStates?.checked || false);
  const [workDetails, setWorkDetails] = useState(
    storedStates?.workDetails || ""
  );

  const changeInputsHandler = (id, value) => {
    switch (id) {
      case "companyName":
        setCompanyName(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, companyName: value })
        );
        break;
      case "jobTitle":
        setJobTitle(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, jobTitle: value })
        );
        break;
      case "city":
        setCity(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, city: value })
        );
        break;
      case "country":
        setCountry(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, country: value })
        );
        break;
      case "from":
        setFrom(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, from: value })
        );
        break;
      case "to":
        setTo(value);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, to: value })
        );
        break;
      case "checked":
        const check = !checked;
        setChecked(check);
        localStorage.setItem(
          "workStates",
          JSON.stringify({ ...storedStates, checked: check })
        );
        break;
      case "workDetails":
        setWorkDetails(value);
        const isEmptyOrOnlyEmptyTags = !stripHtmlTags(value).trim();
        localStorage.setItem(
          "workStates",
          JSON.stringify({
            ...storedStates,
            workDetails: isEmptyOrOnlyEmptyTags ? "" : value,
          })
        );
        break;
    }
  };

  const contextValues = {
    companyName,
    jobTitle,
    city,
    country,
    from,
    to,
    checked,
    workDetails,
    changeInputs: changeInputsHandler,
  };
  return (
    <WorkContext.Provider value={contextValues}>
      {children}
    </WorkContext.Provider>
  );
};

export default WorkContext;
export { WorkContextProvider };
