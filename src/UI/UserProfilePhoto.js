import classes from "./UserProfilePhoto.module.css"

const UserProfilePhoto = (props) => {
    const { outputSection } = props;
  return (
    <div className={`${classes["border-100"]} ${outputSection ? classes["wh-2"] : (classes["wh-1"])} ${!outputSection && classes["img-b"]}`}
      style={{
        width: outputSection ? "70px" : "96px",
        height: outputSection ? "70px" : "96px",
        padding: !outputSection && "0.25rem",
        border: !outputSection && "1px solid #e5e7eb",
        borderRadius: "100%",
      }}
    >
      <div
        className={`${classes["img-wrapper"]} ${classes["border-100"]} profile`}
      >
        J
      </div>
    </div>
  );
};

export default UserProfilePhoto;
