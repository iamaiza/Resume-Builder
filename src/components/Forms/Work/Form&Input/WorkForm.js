"use client"

import React from "react";
import { AngleIcon, DeleteIcon } from "@/Icons/FormIcons";
import classes from "./WorkForm.module.css"
import WorkInputs from "./WorkInput";
import { useContext } from "react";
import WorkContext from "@/Context/WorkContext";

const WorkForm = () => {
  const { companyName } = useContext(WorkContext)
  return (
    <div className={classes.form_container}>
      <div className={`flex-items ${classes["icon-text_wrapper"]}`}>
        <span className={classes.text_sm}>{companyName ? companyName : "Work Experience #1"}</span>
        <div className={`flex-items ${classes.icons_wrapper}`}>
          <DeleteIcon />
          <button>
            <AngleIcon />
          </button>
        </div>
      </div>
      <WorkInputs />
    </div>
  );
};

export default WorkForm;
