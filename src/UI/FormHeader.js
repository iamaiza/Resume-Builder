import { ArrowIcon, DeleteIcon, HelpIcon, SkillsIcon, StarIcon, UserIcon, WorkBagIcon } from "@/Icons/FormIcons";
import classes from "./FormHeader.module.css"

const FormHeader = (props) => {
    const { sectionIcon, sectionName, isPremium, arrow, help, del } = props;
  return (
    <div
      className={`flex-items ${classes["form_header-wrapper"]} ${sectionIcon === "personal" ? classes.gap5 : classes.gap3}`}
    >
      <div className={`flex-items ${classes.heading}`}>
        {sectionIcon === "personal" && <UserIcon />}
        {sectionIcon === "work" && <WorkBagIcon />}
        {sectionIcon === "skill" && <SkillsIcon />}
        {sectionIcon === "strengths" && (
          <div className={`flex-items ${classes["title-icon_wrapper"]}`}>
            <div className={classes.dot} />
            <StarIcon />
          </div>
        )}
        <div className={classes["h-wrapper"]}>
          <h5
            className={`${classes.title} ${classes.hover}`}
          >
            {sectionName}
          </h5>
          {isPremium && (
            <span className={`text-size ${classes.premium}`}>
              PREMIUM
            </span>
          )}
        </div>
      </div>
      <div className={`flex-items ${classes.icons_wrapper}`}>
        {arrow && <ArrowIcon />}
        {help && <HelpIcon />}
        {del && <DeleteIcon />}
      </div>
    </div>
  );
};

export default FormHeader;
