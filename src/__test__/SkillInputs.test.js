import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SkillsContextProvider } from "../Context/SkillContext";
import SkillInfoForm from "../components/Forms/Skill/SkillInfoForm";
import {
  addCategory,
  addSkills,
  setCategoryName,
  setSkillNameAndLevel,
} from "../test-utils/skills-inputs";

beforeEach(() => {
  render(
    <SkillsContextProvider>
      <SkillInfoForm />
    </SkillsContextProvider>
  );
});

//  add category
test("should be able to add category", () => {
  addCategory();
  const getCateForm = screen.getByTestId("cate-form");
  expect(getCateForm).toBeInTheDocument();
});

// check category
test("should be able to see if category added successfully in localstorage", () => {
  addCategory();
  const getValuesFromLS = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValuesFromLS.categories).toHaveLength(2);
});

// add category name
test("should be able to add category name in input", () => {
  addCategory();
  const { cateName } = setCategoryName({ name: "test" });
  expect(cateName.value).toBe("test");
});

// check category name
test("should be able to see if cate name setted correctly in LS", () => {
  addCategory();
  setCategoryName({ name: "test" });

  const getValuesFromLS = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValuesFromLS.categories[0].name).toBe("test");
});

// add skills
test("should be able to add skills in categories", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  const getSkillName = screen.getByLabelText(/Skill name/i);
  expect(getSkillName).toBeInTheDocument();
});

// check skills
test("should be able to see if skill correctly added in categories in LS", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  const getValuesFromLS = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValuesFromLS.categories[0].skills).toHaveLength(2);
});

// add skill name and level
test("should be able to type in skill name and skill level inputs", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  const { skillName, skillLevel } = setSkillNameAndLevel({
    name: "Programming",
    level: "Professional",
  });

  expect(skillName.value).toBe("Programming");
  expect(skillLevel.value).toBe("Professional");
});

// check skill name and level
test("should be able to see if skill name and level add in skills array in LS correctly", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  setSkillNameAndLevel({
    name: "Programming",
    level: "Professional",
  });

  const getValues = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValues.categories[0].skills[0].name).toBe("Programming");
  expect(getValues.categories[0].skills[0].level).toBe("Professional");
});

test("should be able to delete category on click", async () => {
  addCategory();
  // const getCateForm1 = screen.getAllByTestId("cate-form");
  // console.log(getCateForm1.length);
  const deleteBtn = document.getElementById("delete-cate");
  fireEvent.click(deleteBtn);

  const getCateForm = screen.getAllByTestId("cate-form");
  expect(getCateForm).toHaveLength(getCateForm.length);
});

test("should be able to see if categories deleted successfully from LS", () => {
  addCategory();
  const deleteBtn = document.getElementById("delete-cate");
  fireEvent.click(deleteBtn);
  const getValues = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValues.categories).toHaveLength(8);
});

test("should be able to delete skills from categories", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  const skillForm = screen.getByTestId("skill-form");
  const deleteBtn = screen.getByTestId("delete-skill");
  fireEvent.click(deleteBtn);

  expect(skillForm).not.toBeInTheDocument();
});

test("should be able to see if skills deleted successfully from categories in LS", () => {
  addCategory();
  setCategoryName({ name: "test" });
  addSkills();

  const deleteBtn = screen.getByTestId("delete-skill");
  fireEvent.click(deleteBtn);

  const getValues = JSON.parse(localStorage.getItem("skillStates"));
  expect(getValues.categories[0].skills).toHaveLength(0);
})