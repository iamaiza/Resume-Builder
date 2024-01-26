"use client";

import CloseSection from "@/UI/CloseSection";
import FormHeader from "@/UI/FormHeader";
import classes from "./Strength.module.css";
import StrengthForm from "./StrengthForm";
import { useContext, useEffect, useState } from "react";
import Context from "@/Context/Context";

const StrengthInfoForm = () => {
  const { showForm, handleShowForm } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
      setIsOpen(showForm === "strengths")
  }, [showForm])
  const showFormHandler = () => {
    handleShowForm("strengths");

  };
  const hideFormHandler = () => {
    if (showForm == "strengths") {
      setIsOpen(false)
    }

  };
  return (
    <div className={`radius box-shadow ${classes.main_wrapper}`}>
      <FormHeader
        sectionIcon="strengths"
        sectionName="Strengths"
        isPremium={isOpen && true}
        arrow={isOpen && true}
        del={isOpen && true}
        handleShowForm={showFormHandler}
        isOpen={isOpen}
      />
      {isOpen && (
        <>
          <StrengthForm />
          <CloseSection handleHideForm={hideFormHandler} />
        </>
      )}
    </div>
  );
};

export default StrengthInfoForm;
