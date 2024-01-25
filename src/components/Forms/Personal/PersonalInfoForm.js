"use client";

import FormHeader from "@/UI/FormHeader";
import PersonalForm from "./Forms&Inputs/PersonalForm";
import classes from "./Personal.module.css"
import CloseSection from "@/UI/CloseSection";

const PersonalInfoForm = () => {
  return (
    <div className={`box-shadow radius ${classes.form_container}`}>
      <FormHeader
        help={true}
        sectionIcon="personal"
        sectionName="Personal Information"
      />
      <PersonalForm />
      <CloseSection />
    </div>
  );
};

export default PersonalInfoForm;
