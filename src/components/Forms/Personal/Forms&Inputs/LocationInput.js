"use client"

import PersonalStatesContext from "@/Context/PersonalContext";
import PersonalInput from "@/UI/PersonalInput";
import { useContext } from "react";
import classes from "./Location.module.css"

const LocationInput = () => {
  const { street, city, postal, country, changeInputs } = useContext(PersonalStatesContext)
  return (
    <div className={classes.mt10}>
      <PersonalInput
        label1="Street, number"
        label2="City"
        inputId1="street"
        inputId2="city"
        value1={street}
        value2={city}
        changeInputs={changeInputs}
      />
      <div className={classes.pt2}>
        <PersonalInput
          label1="Postal"
          label2="Country"
          inputId1="postal"
          inputId2="country"
          value1={postal}
          value2={country}
          changeInputs={changeInputs}
        />
      </div>
    </div>
  );
};

export default LocationInput;
