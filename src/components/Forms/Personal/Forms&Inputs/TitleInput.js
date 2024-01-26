"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import PersonalInput from "@/UI/PersonalInput";
import { useContext } from "react";
import classes from './Title.module.css'

const TitleInput = () => {
  const { firstName, lastName, titleAfter, titleBefore, phone, email, changeInputs } = useContext(PersonalStatesContext)
  return (
    <div className="flex-1 pl-4">
      <form className="pl-4 border-l">
        <PersonalInput
          label1="First Name"
          label2="Last Name"
          inputId1="first-name"
          inputId2="last-name"
          value1={firstName}
          value2={lastName}
          changeInputs={changeInputs}
        />
        <div className="mt-2">
          <PersonalInput
            label1="Title before"
            label2="Title after"
            inputId1="title-before"
            inputId2="title-after"
            value1={titleBefore}
            value2={titleAfter}
            changeInputs={changeInputs}
          />
        </div>
        <div className="pt-2">
          <label className="text-size" htmlFor="phone">
            Phone Number
          </label>
          <input
            className={classes.title_input}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => changeInputs("phone", e.target.value)}
          />
        </div>
        <div className="pt-2">
          <label className="text-size" htmlFor="email">
            Email Address
          </label>
          <input
            className={classes.title_input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => changeInputs("email", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default TitleInput;
