const { fireEvent, screen } = require("@testing-library/react");

const titleInputs = ({
  firstname,
  lastname,
  titlebefore,
  titleafter,
  phoneNumber,
  emailAddress,
}) => {
  const firstName = screen.getByLabelText("First Name");
  const lastName = screen.getByLabelText("Last Name");
  const titleBefore = screen.getByLabelText("Title before");
  const titleAfter = screen.getByLabelText("Title after");
  const phone = screen.getByLabelText("Phone Number");
  const email = screen.getByLabelText("Email Address");

  if(firstname) {
    fireEvent.change(firstName, { target: { value: firstname } })
  }
  if(lastname) {
    fireEvent.change(lastName, { target: { value: lastname } })
  }
  if(titlebefore) {
    fireEvent.change(titleBefore, { target: { value: titlebefore } })
  }
  if(titleafter) {
    fireEvent.change(titleAfter, { target: { value: titleafter } })
  }
  if(phoneNumber) {
    fireEvent.change(phone, { target: { value: phoneNumber } })
  }
  if(emailAddress) {
    fireEvent.change(email, { target: { value: emailAddress } })
  }

  return { firstName, lastName, titleAfter, titleBefore, phone, email }
};

export { titleInputs }