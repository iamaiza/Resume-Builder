"use client"

import StrengthContext from "@/Context/StrengthContext";
import { useContext } from "react";
import classes from "./StrengthForm.module.css"
import StrengthInput from "@/UI/StrengthInput";
import Suggestions from "./Suggestions";

const StrengthForm = () => {
    const { options, changeInput, deleteInputs } = useContext(StrengthContext)
    return (
      <div className={classes.form_wrapper}>
        <form>
          <Suggestions />
          <div className="pt-4">
            {options &&
              options?.map((opt) => (
                <StrengthInput
                  key={opt.id}
                  id={opt.id}
                  option={opt.option}
                  changeInput={changeInput}
                  deleteInputs={deleteInputs}
                />
              ))}
          </div>
        </form>
      </div>
    );
};

export default StrengthForm;