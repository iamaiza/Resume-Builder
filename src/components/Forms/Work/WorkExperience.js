"use client";

import CloseSection from "@/UI/CloseSection";
import classes from "./Work.module.css";
import WorkForm from "./Form&Input/WorkForm";
import FormHeader from "@/UI/FormHeader";
import Context from "@/Context/Context";
import { useContext, useEffect, useState } from "react";

const WorkExperience = () => {
  const { showForm, handleShowForm } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      setIsOpen(showForm === "work");
  }, [showForm]);
  const showFormHandler = () => {
    handleShowForm("work");
  };
  const hideFormHandler = () => {
    if (showForm == "work") {
      setIsOpen(false)
    }
  };
  return (
    <div className={`box-shadow radius ${classes.main_container}`}>
      <FormHeader
        sectionIcon="work"
        sectionName="Work Experience"
        arrow={isOpen && true}
        help={isOpen && true}
        del={isOpen && true}
        handleShowForm={showFormHandler}
        isOpen={isOpen}
      />
      {isOpen && (
        <>
          <WorkForm />
          <CloseSection handleHideForm={hideFormHandler} />
        </>
      )}
    </div>
  );
};

export default WorkExperience;
