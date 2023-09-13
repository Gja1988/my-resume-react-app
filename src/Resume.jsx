import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Sample from "./Sample";
import Button from "./Button";
import { useState } from "react";

export default function Resume() {
  const [personal, setPersonal] = useState(defaultDetails);
  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);
  const [showDetails, setShowDetails] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const handleDetails = () => {
    setShowDetails((show) => !showDetails);
  };

  const handleEducation = () => {
    setShowEducation((show) => !showEducation);
  };

  const handleExperience = () => {
    setShowExperience((show) => !showExperience);
  };

  return (
    <>
      <h1>Resume App!</h1>
      <div className="content-container">
        <div className="left-content">
          <h2 style={{ fontSize: 24 }}>Personal Details</h2>
          {showDetails && (
            <Personal personal={personal} setPersonal={setPersonal} />
          )}
          <Button onClick={handleDetails}>
            {showDetails ? "Close" : "Add Personal Details"}
          </Button>
          <h2 style={{ fontSize: 24 }}>🎓 Education</h2>
          {showEducation && (
            <Education education={education} setEducation={setEducation} />
          )}
          <Button onClick={handleEducation}>
            {showEducation ? "Close" : "Add Education"}
          </Button>
          <h2 style={{ fontSize: 24 }}>💼 Experience</h2>
          {showExperience && (
            <Experience experience={experience} setExperience={setExperience} />
          )}
          <Button onClick={handleExperience}>
            {showExperience ? "Close" : "Add Work Experience"}
          </Button>
        </div>
        <div className="right-content">
          <Sample
            personal={personal}
            education={education}
            experience={experience}
          />
        </div>
      </div>
    </>
  );
}

const defaultDetails = {
  fullName: "Guillermo Arauz",
  email: "gmo@gmail.com",
  phoneNumber: "987-654-1234",
  location: "Miami, Florida",
};

const defaultEducation = {
  school: "Florida State University",
  degree: "Master's in Counselor Education",
  startYear: "2016",
  endYear: "2023",
  location: "USA",
};

const defaultExperience = {
  companyName: "Microsoft",
  jobTitle: "Web Developer",
  startYear: "2010",
  endYear: "2023",
  location: "Miami, Florida",
  jobDescription: [""],
};
