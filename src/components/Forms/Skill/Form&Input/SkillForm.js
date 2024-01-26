"use client";

import SkillContext from "@/Context/SkillContext";
import { useContext, useState } from "react";
import classes from "./SkillForm.module.css"
import { AngleIcon, DeleteIcon } from "@/Icons/FormIcons";
import SkillInput from "./SkillInput";

const SkillForm = (props) => {
    const { id, deleteCategory, cateName, skills } = props;
    const { addCategoryName, addSkills, changeInputs, deleteSkills } = useContext(SkillContext);
    const [categoryName, setCategoryName] = useState(cateName || "");
  
    console.log(skills);
    const cateNameHandler = (value) => {
      setCategoryName(value);
      addCategoryName(id, value);
    };
  return (
    <div className={classes.form_wrapper}>
      <div className="flex-items justify-between">
        <span className="text-sm">
          {categoryName || `Skill Category #${id}`}
        </span>
        <div className="flex-items gap-3">
          <div onClick={() => deleteCategory(id)}>
            <DeleteIcon />
          </div>
          <div>
            <AngleIcon />
          </div>
        </div>
      </div>
      <div className="mt-7 px-3">
        <label className="text-xs" htmlFor="skill-category">
          Skill category name
        </label>
        <input
          className="block w-1/2 px-1.5 py-1 border mt-1"
          type="text"
          id="skill-category"
          value={categoryName}
          onChange={(e) => cateNameHandler(e.target.value)}
        />
      </div>
      <div className="py-2">
        <form>
          {skills &&
            skills
              .filter((skill) => skill.id !== undefined)
              .map((skill) => (
                <SkillInput
                  key={skill.id}
                  skillId={skill.id}
                  name={skill.name}
                  level={skill.level}
                  cateId={id}
                  changeInputs={changeInputs}
                  deleteSkills={deleteSkills}
                />
              ))}
        </form>
      </div>
      <div
        className={`flex-items ${classes.add_skills}`}
        onClick={() => addSkills(id, Date.now().toString())}
      >
        <button
          onClick={() => addSkills(id)}
        >
          + Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillForm;
