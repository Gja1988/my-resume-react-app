import { useState } from "react";

export default function Sample({ personal, education, experience }) {
  return (
    <>
      <div>
        <h1>{personal.fullName}</h1>
        <h2>{personal.email}</h2>
        <h2>{personal.phoneNumber}</h2>
        <h2>{personal.location}</h2>
      </div>

      <div>
        <h1>{education.school}</h1>
        <h2>{education.degree}</h2>
        <h2>
          {education.startYear} - {education.endYear}
        </h2>
        <h2>{education.location}</h2>
      </div>

      <div>
        <h2></h2>
        <h1>{experience.companyName}</h1>
        <h2>{experience.jobTitle}</h2>
        <h2>
          {experience.startYear} - {experience.endYear}
        </h2>
        <h2>{experience.location}</h2>
        <ul>
          {experience.jobDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
