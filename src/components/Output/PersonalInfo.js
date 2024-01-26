"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import { UserIcon } from "@/Icons/FormIcons";
import { EmailIcon, FlagIcon, GlobeIcon, LocationIcon, PhoneIcon } from "@/Icons/OutputIcons";
import UserProfilePhoto from "@/UI/UserProfilePhoto";
import { useContext } from "react";
import classes from "./PersonalInfo.module.css"

const PersonalInfo = () => {
  const { firstName, lastName, titleAfter, titleBefore, phone, email, nationality, dob, street, city, postal, country, web } = useContext(PersonalStatesContext)
  return (
    <div className={`flex-items ${classes.main_wrapper}`}>
      <div className="flex-1">
        <div className={`flex-items ${classes.title_wrapper}`}>
          <span className={titleBefore !== "" && "mr-1.5"}>{titleBefore}</span>
          <span className={titleAfter !== "" && "mr-1.5"}>
            {firstName} {lastName}
          </span>
          <span className="">{titleAfter}</span>
        </div>
        <div className={`flex-items ${classes.info_wrapper}`}>
          <div
            className={`${classes["dob-national"]} flex-items ${dob === "" && "hidden"}`}
          >
            <UserIcon outputSection={true} />
            <span>{dob}</span>
          </div>
          <div
            className={`${classes["dob-national"]} flex-items ${
              nationality === "" && "hidden"
            }`}
          >
            <FlagIcon />
            <span>{nationality}</span>
          </div>
          <div className={`flex-items mr-2`}>
            <div
              className={`flex-items ${classes.info} ${postal !== "" && "mr-1"} ${
                !street && "hidden"
              }`}
            >
              <LocationIcon />
              <span>{street}{street && ","}</span>
            </div>

            <span className={postal !== "" && "mr-1"}>{city}</span>
            <span className={country !== "" && "mr-1"}>{postal}{postal && ","}</span>
            <span>{country}</span>
          </div>
          <div
            className={`flex-items ${classes.info} mr-2 ${
              phone === "" && "hidden"
            }`}
          >
            <PhoneIcon />
            <span>{phone}</span>
          </div>
          <div
            className={`flex-items ${classes.info} mr-2 ${
              email === "" && "hidden"
            }`}
          >
            <EmailIcon />
            <span>{email}</span>
          </div>
          <div className={`flex-items ${classes.info} ${web === "" && "hidden"}`}>
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
