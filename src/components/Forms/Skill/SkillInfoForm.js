"use client"

import SkillContext from "@/Context/SkillContext";
import CloseSection from "@/UI/CloseSection";
import FormHeader from "@/UI/FormHeader";
import { useContext } from "react";
import classes from "./Skill.module.css"
import SkillForm from "./Form&Input/SkillForm";

const SkillInfoForm = () => {
    const { categories, addCategories, deleteCategory } =
    useContext(SkillContext);
  return (
    <div className={`radius box-shadow ${classes.main_wrapper}`}>
      <FormHeader
        sectionIcon="skill"
        sectionName="Skills"
        isPremium={true}
        arrow={true}
        help={true}
        del={true}
      />
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
        <button
          onClick={() => addCategories(Date.now().toString())}
        >
          + Add Skill Category
        </button>
      </div>

      <CloseSection />
    </div>
  );
};

export default SkillInfoForm;
