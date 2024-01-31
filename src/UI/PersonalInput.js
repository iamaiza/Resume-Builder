import React from "react";
import classes from "./PersonalInput.module.css"

const PersonalInput = (props) => {
    const { label1, label2, inputId1, inputId2, value1, value2, changeInputs } = props;
  return (
    <div className={classes["inputs-wrapper"]}>
      <div className="flex-1">
        <label className="text-size" htmlFor={inputId1}>
          {label1}
        </label>
        <input
          className={classes.input}
          id={inputId1}
          type="text"
          value={value1}
          onChange={(e) => changeInputs(inputId1, e.target.value)}
        />
      </div>
      <div className="flex-1">
        <label className="text-size" htmlFor={inputId2}>
          {label2}
        </label>
        <input
          className={classes.input}
          id={inputId2}
          type="text"
          value={value2}
          onChange={(e) => changeInputs(inputId2, e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalInput;
