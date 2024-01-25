"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import { UserIcon } from "@/Icons/FormIcons";
import { EmailIcon, FlagIcon, GlobeIcon, LocationIcon, PhoneIcon } from "@/Icons/OutputIcons";
import UserProfilePhoto from "@/UI/UserProfilePhoto";
import { useContext } from "react";

const PersonalInfo = () => {
  const { firstName, lastName, titleAfter, titleBefore, phone, email, nationality, dob, street, city, postal, country, web } = useContext(PersonalStatesContext)
  return (
    <div className="flex items-center justify-between p-10 bg-white text-black gap-3">
      <div className="flex-1">
        <div className="flex items-center text-xl font-bold">
          <span className={titleBefore !== "" && "mr-1.5"}>{titleBefore}</span>
          <span className={titleAfter !== "" && "mr-1.5"}>
            {firstName} {lastName}
          </span>
          <span className="">{titleAfter}</span>
        </div>
        <div className="flex items-center flex-wrap text-[9px] mt-4">
          <div
            className={`flex items-center gap-1 mr-2 ${dob === "" && "hidden"}`}
          >
            <UserIcon outputSection={true} />
            <span>{dob}</span>
          </div>
          <div
            className={`flex items-center gap-1 mr-2 ${
              nationality === "" && "hidden"
            }`}
          >
            <FlagIcon />
            <span>{nationality}</span>
          </div>
          <div className="flex items-center mr-2">
            <div
              className={`flex items-center gap-1 ${postal !== "" && "mr-1"} ${
                street === "" && "hidden"
              }`}
            >
              <LocationIcon />
              <span>{street}</span>
            </div>

            <span className={postal !== "" && "mr-1"}>{city}</span>
            <span className={country !== "" && "mr-1"}>{postal}</span>
            <span>{country}</span>
          </div>
          <div
            className={`flex items-center gap-1 mr-2 ${
              phone === "" && "hidden"
            }`}
          >
            <PhoneIcon />
            <span>{phone}</span>
          </div>
          <div
            className={`flex items-center gap-1 mr-2 ${
              email === "" && "hidden"
            }`}
          >
            <EmailIcon />
            <span>{email}</span>
          </div>
          <div className={`flex items-center gap-1 ${web === "" && "hidden"}`}>
            <GlobeIcon />
            <span>{web}</span>
          </div>
        </div>
      </div>
      <UserProfilePhoto outputSection={true} />
    </div>
  );
};

export default PersonalInfo;
