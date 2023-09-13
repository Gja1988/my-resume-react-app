export default function Education({ education, setEducation }) {
  const handleSchool = (e) => {
    setEducation({ ...education, school: e.target.value });
  };

  const handleDegree = (e) => {
    setEducation({ ...education, degree: e.target.value });
  };

  const handleStartYear = (e) => {
    setEducation({ ...education, startYear: e.target.value });
  };

  const handleEndYear = (e) => {
    setEducation({ ...education, endYear: e.target.value });
  };

  const handleLocation = (e) => {
    setEducation({ ...education, location: e.target.value });
  };

  return (
    <form>
      <div>
        <label className="label-header">School</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter school/university"
          className="styled-input"
          onChange={handleSchool}
          value={education.school}
        />
      </div>

      <div>
        <label className="label-header">Degree</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Degree/ Field of Study"
          className="styled-input"
          onChange={handleDegree}
          value={education.degree}
        />
      </div>

      <div>
        <label className="label-header">Start Date/Year</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="E.g. 06/2023 or 2023"
          className="styled-input"
          onChange={handleStartYear}
          value={education.startYear}
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
          value={education.endYear}
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
          value={education.location}
        />
      </div>
    </form>
  );
}
