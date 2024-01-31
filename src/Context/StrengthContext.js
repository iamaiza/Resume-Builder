"use client";

import React from "react";
const { createContext, useState } = require("react");

const StrengthContext = createContext();

const StrengthContextProvider = ({ children }) => {
  const storedStates = JSON.parse(localStorage.getItem("strengthState"));
  const [options, setOptions] = useState(storedStates?.suggestions || []);

  const changeInputHandler = (id, value) => {
    setOptions((prevOpt) => {
      const updatedOptions = prevOpt.map((opt) =>
        opt.id === id ? { ...opt, option: value } : opt
      );
  
      localStorage.setItem("strengthState", JSON.stringify({
        suggestions: updatedOptions
      }));
  
      return updatedOptions;
    });
  };
  const addToLocalStorage = (value) => {
    const newOption = {
      id: Date.now().toString(),
      option: value,
    };
    setOptions((prevOpt) => [...prevOpt, newOption]);
    localStorage.setItem(
      "strengthState",
      JSON.stringify({
        suggestions: [...options, newOption],
      })
    );
  };

  const deleteInputsHandler = (id) => {
    setOptions((prevOpt) => prevOpt.filter((opt) => opt.id !== id));
    localStorage.setItem(
      "strengthState",
      JSON.stringify({
        suggestions: options.filter((opt) => opt.id !== id),
      })
    );
  };

  const contextValue = {
    options,
    changeInput: changeInputHandler,
    addInputs: addToLocalStorage,
    deleteInputs: deleteInputsHandler,
  };

  return (
    <StrengthContext.Provider value={contextValue}>
      {children}
    </StrengthContext.Provider>
  );
};

export default StrengthContext;
export { StrengthContextProvider };
