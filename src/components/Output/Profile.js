"use client";

import React from "react";
import PersonalStatesContext from "@/Context/PersonalContext";
import { parseContent } from "@/utils";
import { useContext } from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  const { profileDescription } = useContext(PersonalStatesContext);
  const desc = parseContent(profileDescription);
  return (
    <>
      {profileDescription && (
        <div className={`mb-6 `}>
          <span className="h-style">Profile</span>
          <div
            className={classes.desc}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
