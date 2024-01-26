import CloseSection from "@/UI/CloseSection";
import FormHeader from "@/UI/FormHeader";
import classes from "./Strength.module.css"
import StrengthForm from "./StrengthForm";

const StrengthInfoForm = () => {
  return (
    <div className={`radius box-shadow ${classes.main_wrapper}`}>
      <FormHeader
        sectionIcon="strengths"
        sectionName="Strengths"
        isPremium={true}
        arrow={true}
        del={true}
      />
      <StrengthForm />
      <CloseSection />
    </div>
  );
};

export default StrengthInfoForm;
