import React, { useState } from "react";

function Task9() {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dropdown Menu</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">-- Select a Course --</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Vue">Vue</option>
      </select>

      <br /><br />

      {selected && <p>You selected: <strong>{selected}</strong></p>}
    </div>
  );
}

export default Task9;
