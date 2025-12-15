import React, { useState, useEffect } from "react";

function Task4() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      console.log("Name changed:", name);
    }
  }, [name]); // Runs whenever name changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name Logger</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}

export default Task4;
