const { fireEvent, screen } = require("@testing-library/react");

const addCategory = () => {
  const addCategories = screen.getByText(/Add Skill Category/i);
  fireEvent.click(addCategories);
};

const addSkills = () => {
  const addSkills = screen.getAllByText(/Add Skill/i)[0];
  fireEvent.click(addSkills);
};

const setCategoryName = ({ name, skillname, skilllevel }) => {
  const cateName = screen.getByLabelText(/Skill category name/i);

  if (name) {
    fireEvent.change(cateName, { target: { value: name } });
  }

  return { cateName }
};

const setSkillNameAndLevel = ({ name, level }) => {
    const skillName = screen.getByLabelText(/Skill name/i);
    const skillLevel = screen.getByLabelText(/Skill level/i);

    if (name) {
      fireEvent.change(skillName, { target: { value: name } });
    }

    if (level) {
      fireEvent.change(skillLevel, { target: { value: level } });
    }

    return { skillName, skillLevel }
}

export { addCategory, addSkills, setCategoryName , setSkillNameAndLevel};
