"use client";

import PersonalInput from "@/UI/PersonalInput";
import LocationInput from "./LocationInput";
import Profile from "./Profile";
import TitleInput from "./TitleInput";
import { useContext } from "react";
import PersonalStatesContext from "@/Context/PersonalContext";
import classes from "./PersonalForm.module.css";
import ProfilePhoto from "./ProfilePhoto";

const PersonalForm = () => {
  const { dob, nationality, changeInputs, web } = useContext(
    PersonalStatesContext
  );
  return (
    <div className="py-6">
      <div className={classes["profile-title_container"]}>
        <ProfilePhoto />
        <TitleInput />
      </div>
      <div className="mt-5">
        <PersonalInput
          label1="Date of birth"
          label2="Nationality"
          inputId1="DOB"
          inputId2="nationality"
          value1={dob}
          value2={nationality}
          changeInputs={changeInputs}
        />
      </div>
      <LocationInput />
      <div className="pt-2">
        <label className="text-size" htmlFor="web">
          Web
        </label>
        <input
          className={classes.title_input}
          type="text"
          id="web"
          value={web}
          onChange={(e) => changeInputs("web", e.target.value)}
        />
      </div>
      <Profile />
    </div>
  );
};

export default PersonalForm;
