"use client";

import FormHeader from "@/UI/FormHeader";
import PersonalForm from "./Forms&Inputs/PersonalForm";
import classes from "./Personal.module.css";
import CloseSection from "@/UI/CloseSection";
import { useContext, useEffect, useState } from "react";
import Context from "@/Context/Context";

const PersonalInfoForm = () => {
  const { showForm, handleShowForm } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
      setIsOpen(showForm === "personal");
 
  }, [showForm]);
  const showFormHandler = () => {
    handleShowForm("personal");
  };
  const hideFormHandler = () => {
    if (showForm == "personal") {
      setIsOpen(false)
    }
  };
  return (
    <div className={`box-shadow radius ${classes.form_container}`}>
      <FormHeader
        help={isOpen && true}
        sectionIcon="personal"
        sectionName="Personal Information"
        handleShowForm={showFormHandler}
        isOpen={isOpen}
      />
      {isOpen && (
        <>
          <PersonalForm />
          <CloseSection handleHideForm={hideFormHandler} />
        </>
      )}
    </div>
  );
};

export default PersonalInfoForm;
