import React from "react";
import { AngleIcon } from "../Icons/FormIcons";
import classes from "./CloseSection.module.css"

const CloseSection = (props) => {
  const { handleHideForm } = props;
  return (
    <div
      className={`${classes["close-section"]}`}
      onClick={handleHideForm}
    >
      <AngleIcon closeSection={true} />
    </div>
  );
};

export default CloseSection;
