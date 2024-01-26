"use client"
import { useState } from "react";
import classes from "./StrengthInput.module.css"
import { DeleteIcon, MenuIcon } from "@/Icons/FormIcons";

const StrengthInput = (props) => {
  const { id, option, changeInput, deleteInputs } = props;
  const [opt, setOpt] = useState(option || "");
  const changeInputHandler = (e) => {
    setOpt(e.target.value);
    changeInput(id, e.target.value);
  };
  return (
    <div
      className={`flex-items ${classes["input-card"]}`}
    >
      <div className={classes.show} onClick={() => deleteInputs(id)}>
        <DeleteIcon />
      </div>

      <input
        type="text"
        placeholder="Eg. Time Management"
        value={opt}
        onChange={changeInputHandler}
      />
      <div className={classes.show}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default StrengthInput;
