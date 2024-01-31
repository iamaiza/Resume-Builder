"use client";

import React from "react";
import { useContext } from "react";
import classes from "./WorkInput.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import WorkContext from "../../../../Context/WorkContext";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],
    [{ list: "bullet" }],
    [{ list: "ordered" }],
  ],
};

const WorkInputs = () => {
  const {
    companyName,
    jobTitle,
    city,
    country,
    from,
    to,
    checked,
    workDetails,
    changeInputs,
  } = useContext(WorkContext);
  return (
    <div className="pt-6">
      <form>
        <div className={`flex-items ${classes.inputs_wrapper}`}>
          <input
            className={classes.inputs}
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => changeInputs("companyName", e.target.value)}
          />
          <input
            className={classes.inputs}
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => changeInputs("jobTitle", e.target.value)}
          />
        </div>
        <div className={`pt-4 flex-items ${classes.inputs_wrapper}`}>
          <input
            className={classes.inputs}
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => changeInputs("city", e.target.value)}
          />
          <input
            className={classes.inputs}
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => changeInputs("country", e.target.value)}
          />
        </div>
        <div className={classes["inputs_wrapper-2"]}>
          <div className={`flex-items ${classes.date_wrapper}`}>
            <input
              type="date"
              placeholder="From"
              className={classes.inputs}
              value={from}
              onChange={(e) => changeInputs("from", e.target.value)}
            />
            -
            <input
              type="date"
              placeholder="To"
              className={classes.inputs}
              value={to}
              onChange={(e) => changeInputs("to", e.target.value)}
            />
          </div>
          <div className={classes.checkbox_wrapper}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => changeInputs("checked")}
            />
            <span className="text-xs">I currently work here</span>
          </div>
        </div>
        <div className="pt-4">
          <span className="text-size">Profile</span>
          <div className="mt-1.5">
            <ReactQuill
              id="work"
              className="text-lg"
              theme="snow"
              modules={modules}
              placeholder="Add your work experience"
              value={workDetails}
              onChange={(value) => changeInputs("workDetails", value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkInputs;
