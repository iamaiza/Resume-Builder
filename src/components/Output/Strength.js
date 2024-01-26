"use client"
import { useContext } from "react";
import classes from "./Strength.module.css"
import StrengthContext from "@/Context/StrengthContext";
const Strength = () => {
  const { options } = useContext(StrengthContext);
  return (
    <div
      className={`pl-6 mt-3 ${!options || (options.length <= 0 && "hidden")}`}
    >
      <span className={classes["title-span"]}>Strengths</span>
      <div className={classes.options}>
        {options &&
          options?.map((opt) => (
            <div
              className={`${classes.option} ${!opt.option && "hidden"}`}
            >
              {opt.option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Strength;
