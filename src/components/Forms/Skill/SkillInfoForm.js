"use client";

import React from "react";
import SkillContext from "../../../Context/SkillContext";
import CloseSection from "../../../UI/CloseSection";
import FormHeader from "../../../UI/FormHeader";
import { useContext, useEffect, useState } from "react";
import classes from "./Skill.module.css";
import SkillForm from "./Form&Input/SkillForm";
import Context from "../../../Context/Context";

const SkillInfoForm = () => {
  const { categories, addCategories, deleteCategory } =
    useContext(SkillContext);
  const { showForm, handleShowForm } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
      setIsOpen(showForm === "skill")
  }, [showForm])
  const showFormHandler = () => {
    handleShowForm("skill");
  };
  const hideFormHandler = () => {
    if (showForm == "skill") {
      setIsOpen(false)
    }
  };
  return (
    <div className={`radius box-shadow ${classes.main_wrapper}`}>
      <FormHeader
        sectionIcon="skill"
        sectionName="Skills"
        isPremium={isOpen && true}
        arrow={isOpen && true}
        help={isOpen && true}
        del={isOpen && true}
        handleShowForm={showFormHandler}
        isOpen={isOpen}
      />
      {/* {isOpen && ( */}
        <>
          {categories &&
            categories.map((category) => (
              <SkillForm
                key={category.id}
                id={category.id}
                cateName={category.name}
                skills={category.skills}
                deleteCategory={deleteCategory}
              />
            ))}
          <div className={`flex-items ${classes["add_skills-cate"]}`}>
            <button onClick={() => addCategories(Date.now().toString())}>
              + Add Skill Category
            </button>
          </div>

          <CloseSection handleHideForm={hideFormHandler} />
        </>
      {/* )} */}
    </div>
  );
};

export default SkillInfoForm;
