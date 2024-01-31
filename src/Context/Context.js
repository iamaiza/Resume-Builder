"use client";
import React from "react";
const { createContext, useState } = require("react");

const Context = createContext({
  showForm: "",
  handleShowForm: () => {},
});

const ContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState("");
  const showFormHandler = (name) => {
    switch (name) {
        case "personal":
            setShowForm("personal");
            break;
        case "work":
            setShowForm("work");
            break;
        case "skill":
            setShowForm("skill");
            break;
        case "strengths":
            setShowForm("strengths");
            break;
        default:
            setShowForm(null);
            break;
    }
  };


  const contextValues = {
    showForm,
    handleShowForm: showFormHandler,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default Context;
export { ContextProvider };
