"use client";

import React from "react";
import WorkContext from "@/Context/WorkContext";
import { CalendarIcon, LocationIcon } from "@/Icons/OutputIcons";
import { parseContent } from "@/utils";
import { useContext } from "react";
import classes from "./Work.module.css"

const Work = () => {
  const {
    from,
    to,
    city,
    country,
    checked,
    jobTitle,
    companyName,
    workDetails,
  } = useContext(WorkContext);
  const work_details = parseContent(workDetails);
  return (
    <div className="">
      <span className="h-style">
        Work Experience
      </span>
      <div className="flex-items">
        <div
          className={`${classes["date_wrapper-1"]} ${
            from || to ? "flex" : "hidden"
          }`}
        >
          <CalendarIcon />
          <span className={classes["date-span"]}>
            {from} {from && "-"} {to}
          </span>
        </div>
        <div
          className={`${classes["date_wrapper-2"]} ${
            city || country ? "flex" : "hidden"
          }`}
        >
          <LocationIcon work={true} />
          <span className={classes["date-span"]}>
            {city}
            {city && ","} {country}
          </span>
        </div>
      </div>
      {checked && !from && !to && (
        <div className={`flex-items ${classes.check_wrapper}`}>
          <CalendarIcon />
          <span className={classes["date-span"]}>present</span>
        </div>
      )}
      <div className={`mt-1 ${classes["title-input"]}`}>
        {jobTitle}
      </div>
      <div className={`-mt-1 ${classes["title-input"]}`}>
        {companyName}
      </div>
      <div>
        <div
          className={classes.desc}
          dangerouslySetInnerHTML={{ __html: work_details }}
        />
      </div>
    </div>
  );
};

export default Work;
