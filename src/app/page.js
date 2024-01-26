import PersonalInfoForm from "@/components/Forms/Personal/PersonalInfoForm";
import WorkExperience from "@/components/Forms/Work/WorkExperience";
import PersonalInfo from "@/components/Output/PersonalInfo";
import Profile from "@/components/Output/Profile";
import Work from "@/components/Output/Work";
import classes from "./page.module.css"
import SkillInfoForm from "@/components/Forms/Skill/SkillInfoForm";
import Skills from "@/components/Output/Skill";
import StrengthInfoForm from "@/components/Forms/Strength/Strength";
import Strength from "@/components/Output/Strength";

export default function Home() {
  return (
    <div className="flex">
      <div className={`${classes.forms_container} ${classes["left-sec"]}`}>
        <PersonalInfoForm />
        <WorkExperience />
        <SkillInfoForm />
        <StrengthInfoForm />
      </div>
      <div className={`${classes.forms_container} ${classes["right-sec"]}`}>
        <div className={classes["right-sec_wrapper"]}>
          <PersonalInfo />
          <div className={classes["flex-sec_wrapper"]}>
            <div className="flex-1">
              <Profile />
              <Work />
            </div>
            <div className="flex-1">
              <Skills />
              <Strength />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
