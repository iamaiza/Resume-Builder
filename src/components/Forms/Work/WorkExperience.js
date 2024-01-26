import CloseSection from "@/UI/CloseSection";
import classes from "./Work.module.css"
import WorkForm from "./Form&Input/WorkForm";
import FormHeader from "@/UI/FormHeader";

const WorkExperience = () => {
  return (
    <div className={`box-shadow radius ${classes.main_container}`}>
      <FormHeader
        sectionIcon="work"
        sectionName="Work Experience"
        arrow={true}
        help={true}
        del={true}
      />
      <WorkForm />
      <CloseSection />
    </div>
  );
};

export default WorkExperience;
