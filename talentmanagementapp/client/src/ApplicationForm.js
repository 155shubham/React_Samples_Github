import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DPSTMApplicationForm(props) {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;
  const projectId = state.ProjectId;

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const initialFormData = Object.freeze({
    name: "",
    address: "",
    date: date,
    projectId: projectId.toString(),
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/talents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ TalentData: formData }),
    });

    await fetch("/api/projects/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ProjectId: projectId }),
    });

    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form>
      <h2>Add Talent For Project {state.ProjectName}</h2>
      <label>Project ID</label>
      <input
        name="projectId"
        onChange={handleChange}
        disabled
        value={state.ProjectId}
      />
      <label>Name</label>
      <input name="name" onChange={handleChange} required />
      <label>Address</label>
      <input name="address" onChange={handleChange} />
      <label>Date</label>
      <input
        name="date"
        onChange={handleChange}
        value={
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
        }
      />
      <div>
        <button onClick={handleCancel} className="cancelButton">
          Cancel
        </button>
        <button onClick={handleSubmit} className="submitButton">
          Submit
        </button>
      </div>
    </form>
  );
}
