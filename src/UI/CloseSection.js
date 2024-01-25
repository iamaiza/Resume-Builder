import { AngleIcon } from "@/Icons/FormIcons";
import classes from "./CloseSection.module.css"

const CloseSection = () => {
  return (
    <div
      className={`${classes["close-section"]}`}
    >
      <AngleIcon closeSection={true} />
    </div>
  );
};

export default CloseSection;
