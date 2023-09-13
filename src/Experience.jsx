import { useState } from "react";

export default function Experience({ experience, setExperience }) {
  const [newJobDescription, setNewJobDescription] = useState("");

  const handleCompany = (e) => {
    setExperience({ ...experience, companyName: e.target.value });
  };

  const handleJobTitle = (e) => {
    setExperience({ ...experience, jobTitle: e.target.value });
  };

  const handleStartYear = (e) => {
    setExperience({ ...experience, startYear: e.target.value });
  };

  const handleEndYear = (e) => {
    setExperience({ ...experience, endYear: e.target.value });
  };

  const handleLocation = (e) => {
    setExperience({ ...experience, location: e.target.value });
  };

  const handleJobDescription = (e, index) => {
    const newJobDescriptions = [...experience.jobDescription]; // Copy the existing job descriptions array
    newJobDescriptions[index] = e.target.value; // Update the description at the specified index
    setExperience({ ...experience, jobDescription: newJobDescriptions });
  };

  const addJobDescription = (e) => {
    e.preventDefault();
    if (newJobDescription.trim() !== "") {
      // Check if the new description is not empty or just whitespace
      setExperience((prevExperience) => ({
        ...prevExperience,
        jobDescription: [...prevExperience.jobDescription, newJobDescription],
      }));
      setNewJobDescription(""); // Clear the input field after adding
    }
  };

  return (
    <form>
      <div>
        <label className="label-header">Company Name</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Company Name"
          className="styled-input"
          onChange={handleCompany}
          value={experience.companyName}
        />
      </div>

      <div>
        <label className="label-header">Job Title</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Job Title"
          className="styled-input"
          onChange={handleJobTitle}
          value={experience.jobTitle}
        />
      </div>

      <div>
        <label className="label-header">Start Date/Year</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="E.g. 06/2020 or 2020"
          className="styled-input"
          onChange={handleStartYear}
          value={experience.startYear}
        />
      </div>

      <div>
        <label className="label-header">End Date/Year</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="E.g. 06/2023 or 2023"
          className="styled-input"
          onChange={handleEndYear}
          value={experience.endYear}
        />
      </div>

      <div>
        <label className="label-header">Location</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="E.g. Miami, Florida"
          className="styled-input"
          onChange={handleLocation}
          value={experience.location}
        />
      </div>
      <div>
        <label className="label-header">Job Description</label>
      </div>
      <div>
        {experience.jobDescription.map((desc, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter job description/duties"
              className="styled-input"
              onChange={(e) => handleJobDescription(e, index)}
              value={desc}
            />
            <button>Remove</button>
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Enter new job description"
            className="styled-input"
            onChange={(e) => setNewJobDescription(e.target.value)} // Update the new job description text
            value={newJobDescription} // Bind the value of the input field to the state
          />
          <button className="custom-button" onClick={addJobDescription}>
            Add Job Description
          </button>
        </div>
      </div>
    </form>
  );
}
