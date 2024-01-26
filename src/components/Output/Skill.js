"use client";

import SkillContext from "@/Context/SkillContext";
import { CategoryIcon } from "@/Icons/OutputIcons";
import { useContext, useEffect, useState } from "react";
import classes from "./Skill.module.css";

const Skills = () => {
  const { categories } = useContext(SkillContext);
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const skills = categories && categories.some(cate =>
      cate.skills && cate.skills.length > 0
    );
    const cateName =  categories && categories.some(cate =>
      cate.name && cate.name.trim() !== "")

      setIsHidden(!(skills || cateName))

  }, [categories])
  return (
    <div className={`pl-6 ${isHidden ? "hidden" : "" }`}>
      <span className="h-style">Skills</span>
      {categories &&
        categories?.map((cate) => (
          <>
            {cate.name && (
              <div className={`flex-items ${classes["cate-name_wrapper"]}`}>
                <CategoryIcon />
                <span className={classes["cate-name"]}>{cate?.name}</span>
              </div>
            )}

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
