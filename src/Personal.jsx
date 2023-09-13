export default function Personal({ personal, setPersonal }) {
  const handleFullName = (e) => {
    setPersonal({ ...personal, fullName: e.target.value });
  };

  const handleEmail = (e) => {
    setPersonal({ ...personal, email: e.target.value });
  };

  const handlePhoneNumber = (e) => {
    setPersonal({ ...personal, phoneNumber: e.target.value });
  };

  const handleLocation = (e) => {
    setPersonal({ ...personal, location: e.target.value });
  };

  return (
    <form>
      <div>
        <label className="label-header">Full Name</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="E.g. John Smith"
          className="styled-input"
          onChange={handleFullName}
          value={personal.fullName}
        />
      </div>

      <div>
        <label className="label-header">Email</label>
      </div>
      <div>
        <input
          type="email"
          placeholder="jsmith@gmail.com"
          className="styled-input"
          onChange={handleEmail}
          value={personal.email}
        />
      </div>

      <div>
        <label className="label-header">Phone number</label>
      </div>
      <div>
        <input
          type="tel"
          placeholder="987-654-1234"
          className="styled-input"
          onChange={handlePhoneNumber}
          value={personal.phoneNumber}
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
          value={personal.location}
        />
      </div>
    </form>
  );
}
