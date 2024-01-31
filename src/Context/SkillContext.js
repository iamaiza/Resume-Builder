"use client";

import React from "react";
const { createContext, useState } = require("react");

const SkillContext = createContext();

const SkillsContextProvider = ({ children }) => {
  const storedStates = JSON.parse(localStorage.getItem("skillStates")) || {
    categories: [],
  };
  const [skillCategories, setSkillCategories] = useState(
    storedStates.categories
  );

  const addCategoriesHandler = (id) => {
    const categories = storedStates.categories?.find(
      (category) => category.id === id
    );
    const newCategory = {
      id: categories?.id || id,
      name: categories?.name || "",
      skills: categories?.skills || [],
    };

    setSkillCategories((prevCategory) => [...prevCategory, newCategory]);
    localStorage.setItem(
      "skillStates",
      JSON.stringify({ categories: [...storedStates.categories, newCategory] })
    );
  };

  const deleteCategoryHandler = (id) => {
    setSkillCategories((prevCategory) =>
      prevCategory.filter((cate) => cate.id !== id)
    );
    localStorage.setItem(
      "skillStates",
      JSON.stringify({
        categories: storedStates.categories.filter((cate) => cate.id !== id),
      })
    );
  };

  const addCategoryNameHandler = (id, value) => {
    setSkillCategories((category) =>
      category.map((cate) => (cate.id === id ? { ...cate, name: value } : cate))
    );
    localStorage.setItem(
      "skillStates",
      JSON.stringify({
        categories: storedStates.categories.map((cate) =>
          cate.id === id ? { ...cate, name: value } : cate
        ),
      })
    );
  };

  const addSkillsHandler = (cateId, skillId) => {
    const categories = storedStates.categories?.find(
      (cate) => cate.id === cateId
    );
    const skills = categories.skills?.find((skill) => skill.id === skillId);
    const newSkill = {
      id: skills?.id || skillId,
      name: skills?.name || "",
      level: skills?.level || "",
    };

    setSkillCategories((prevCategory) =>
      prevCategory.map((category) =>
        category.id === cateId
          ? {
              ...category,
              skills: [...category.skills, newSkill],
            }
          : category
      )
    );
    localStorage.setItem(
      "skillStates",
      JSON.stringify({
        categories: storedStates.categories.map((cate) =>
          cate.id === cateId
            ? {
                ...cate,
                skills: [...cate.skills, newSkill],
              }
            : cate
        ),
      })
    );
  };

  const changeInputsHandler = (skillId, cateId, field, value) => {
    setSkillCategories((categories) =>
      categories.map((cate) =>
        cate.id === cateId
          ? {
              ...cate,
              skills: cate.skills.map((skill) =>
                skill.id === skillId
                  ? {
                      ...skill,
                      [field]: value,
                    }
                  : skill
              ),
            }
          : cate
      )
    );

    localStorage.setItem(
      "skillStates",
      JSON.stringify({
        categories: storedStates.categories.map((cate) =>
          cate.id === cateId
            ? {
                ...cate,
                skills: cate.skills.map((skill) =>
                  skill.id === skillId
                    ? {
                        ...skill,
                        [field]: value,
                      }
                    : skill
                ),
              }
            : cate
        ),
      })
    );
  };

  const deleteSkillsHandler = (cateId, skillId) => {
    setSkillCategories((categories) =>
      categories.map((cate) =>
        cate.id === cateId
          ? {
              ...cate,
              skills: cate.skills.filter((skill) => skill.id !== skillId),
            }
          : cate
      )
    );

    localStorage.setItem(
      "skillStates",
      JSON.stringify({
        categories: storedStates.categories.map((cate) =>
          cate.id === cateId
            ? {
                ...cate,
                skills: cate.skills.filter((skill) => skill.id !== skillId),
              }
            : cate
        ),
      })
    );
  };

  const contextValues = {
    categories: skillCategories,
    addCategories: addCategoriesHandler,
    deleteCategory: deleteCategoryHandler,
    addCategoryName: addCategoryNameHandler,
    addSkills: addSkillsHandler,
    changeInputs: changeInputsHandler,
    deleteSkills: deleteSkillsHandler,
  };

  return (
    <SkillContext.Provider value={contextValues}>
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
export { SkillsContextProvider };
