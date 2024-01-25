"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import { useContext } from "react";
import classes from "./Profile.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "bullet" }],
      [{ list: "ordered" }],
    ],
  };

const Profile = () => {
  const { profileDescription, changeInputs } = useContext(PersonalStatesContext)
  return (
    <div className={classes["pt-2"]}>
      <span className="text-size">Profile</span>
      <div className={classes["mt-half"]}>
        <ReactQuill
          theme="snow"
          modules={modules}
          placeholder="Add information about yourself or what you're looking for in a new job..."
          value={profileDescription}
          onChange={(value) => changeInputs("profile-desc", value)}
        />
      </div>
    </div>
  );
};

export default Profile;
