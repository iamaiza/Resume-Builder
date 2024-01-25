import PersonalInfoForm from "@/components/Forms/Personal/PersonalInfoForm";
import PersonalInfo from "@/components/Output/PersonalInfo";
import Profile from "@/components/Output/Profile";

export default function Home() {
  return (
    <div className="flex">
      <div className="forms_container left-sec">
        <PersonalInfoForm />
      </div>
      <div className="forms_container right-sec">
        <div className="right-sec_wrapper">
          <PersonalInfo />
          <div className="flex-sec_wrapper">
            <div className="flex-1">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
