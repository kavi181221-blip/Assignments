import React, { useState } from "react";

function Task1() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Greeting App</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>
        {name ? `Hello, ${name}` : "Hello!"}
      </h3>
    </div>
  );
}

export default Task1;
