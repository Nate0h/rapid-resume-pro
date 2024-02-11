import { useState } from "react";
function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const [showForm, setShowForm] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });

  const handlePersonalDetailsChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    //setAddEducationData([...addEducationData, addEducationData.fieldName = fieldValue]);
    const newEditPersonalDetails = { ...editPersonalDetails };
    newEditPersonalDetails[fieldName] = fieldValue;
    setEditPersonalDetails(newEditPersonalDetails);
  };

  const handlePersonalDetailsSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newPersonalDetails = {
      fullName: editPersonalDetails.fullName,
      email: editPersonalDetails.email,
      phone: editPersonalDetails.phone,
      address: editPersonalDetails.address,
      aboutMe: editPersonalDetails.aboutMe,
    };

    setPersonalDetails(newPersonalDetails);
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        {""}
        <button onClick={() => setShowForm(!showForm)}>
          Edit Personal Details
        </button>
      </div>
      {showForm && (
        <>
          <PersonalDetailsForm
            personalDetails={editPersonalDetails}
            submit={handlePersonalDetailsSubmit}
            handleChange={handlePersonalDetailsChange}
          />
        </>
      )}
    </div>
  );
}

function PersonalDetailsForm({ personalDetails, submit, handleChange }) {
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          value={personalDetails.fullName}
          onChange={handleChange}
          id="fullName"
          type="text"
          required
          placeholder="e.g. John Smith"
        />
        <label htmlFor="email">Email</label>
        <input
          value={personalDetails.email}
          onChange={handleChange}
          type="email"
          id="email"
          required
          placeholder="e.g. Johnsmith123@email.com"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          value={personalDetails.phone}
          onChange={handleChange}
          type="tel"
          id="phone"
          placeholder="XXX-XXX-XXXX"
          required
        />
        <label htmlFor="address">Address</label>
        <input
          value={personalDetails.address}
          onChange={handleChange}
          type="text"
          id="address"
          placeholder="e.g. 45 Maplewood Avenue"
          required
        />
        <label htmlFor="aboutMe">About Me</label>
        <textarea
          value={personalDetails.aboutMe}
          onChange={handleChange}
          id="aboutMe"
          rows={3}
          placeholder="Tell Us About Yourself..."
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
