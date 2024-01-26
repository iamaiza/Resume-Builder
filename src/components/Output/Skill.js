"use client";

import SkillContext from "@/Context/SkillContext";
import { CategoryIcon } from "@/Icons/OutputIcons";
import { useContext } from "react";
import classes from "./Skill.module.css"

const Skills = () => {
  const { categories } = useContext(SkillContext);
  return (
    <div className="pl-6">
      <span className={classes.title_span}>Skills</span>
      {categories &&
        categories?.map((cate) => (
          <>
            <div className={`flex-items ${classes["cate-name_wrapper"]}`}>
              <CategoryIcon />
              <span className={classes["cate-name"]}>
                {cate?.name}
              </span>
            </div>
            <div className={classes.skills_wrapper}>
              {cate.skills &&
                cate.skills.map((skill) => (
                  <div className="flex gap-5">
                    <div className="text-[#d8d8d8]">{skill.name}</div>
                    <div className="text-[#efefef] font-bold">
                      {skill.level}
                    </div>
                  </div>
                ))}
            </div>
          </>
        ))}
    </div>
  );
};

export default Skills;
