import React, { useState } from "react";

function Task3() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Checkbox Example</h2>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Agree to terms
      </label>

      <p>Status: {isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default Task3;

