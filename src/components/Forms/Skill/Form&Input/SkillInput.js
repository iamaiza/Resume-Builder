import { useState } from "react";
import classes from "./SkillInput.module.css"
import { BarIcon, DeleteIcon, MenuIcon } from "@/Icons/FormIcons";

const SkillInput = (props) => {
  const { name, level, cateId, changeInputs, skillId, deleteSkills } = props;
  const [skillName, setSkillName] = useState(name || "");
  const [skillLevel, setSkillLevel] = useState(level || "");
  return (
    <div
      className={`flex-items ${classes["skill_input-wrapper"]}`}
    >
      <div className="flex-1">
        <label className="text-size" htmlFor="skill-name">
          Skill name
        </label>
        <input
          className={classes.inputs}
          id="skill-name"
          type="text"
          value={skillName}
          onChange={(e) => {
            setSkillName(e.target.value);
            changeInputs(skillId, cateId, "name", e.target.value);
          }}
        />
      </div>
      <div className="flex-1">
        <label className="text-size" htmlFor="skill-level">
          Skill level
        </label>
        <select
          className={`bg-white ${classes.inputs}`}
          id="skill-level"
          value={skillLevel}
          onChange={(e) => {
            setSkillLevel(e.target.value);
            changeInputs(skillId, cateId, "level", e.target.value);
          }}
        >
          <option>Elementry</option>
          <option>Limited</option>
          <option>Professional</option>
          <option>Full</option>
          <option>Native</option>
          <option>None</option>
        </select>
      </div>
      <div className="pt-7">
        <BarIcon />
      </div>
      <div className="pt-6" onClick={() => deleteSkills(cateId, skillId)}>
        <DeleteIcon />
      </div>
      <div className={`pt-7 ${classes.show}`}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default SkillInput;
