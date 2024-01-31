import React from "react";
import UserProfilePhoto from "../../../../UI/UserProfilePhoto";
import classes from "../Personal.module.css";

const ProfilePhoto = () => {
  return (
    <div>
      <UserProfilePhoto />
      <div className={`flex-items ${classes["profile-photo"]}`}>
        <input type="checkbox" />
        <span className={classes.text_xs}>Show picture</span>
      </div>
    </div>
  );
};

export default ProfilePhoto;
