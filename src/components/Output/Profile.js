"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import { parseDescription } from "@/utils";
import { useContext } from "react";

const Profile = () => {
  const { profileDescription } = useContext(PersonalStatesContext)
    const desc = parseDescription(profileDescription)
    return (
        <div className={`mb-6 ${profileDescription ? "block" : "hidden"}`}>
        <span className={`text-xs text-[#808080] font-semibold`}>Profile</span>
        <div
          className="text-[9px] text-[#d8d8d8] mt-2"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    )
};

export default Profile;