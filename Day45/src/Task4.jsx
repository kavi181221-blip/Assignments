import React, { useState } from "react";

function Task4() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select Your Country</h2>

      <select value={country} onChange={handleChange}>
        <option value="">-- Choose Country --</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select>

      <p>Selected Country: {country || "None"}</p>
    </div>
  );
}

export default Task4;
