import React, { useState } from "react";

function Task2() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase()); // convert to uppercase
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Uppercase Input</h2>

      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      />

      <p>Typed Text: {text}</p>
    </div>
  );
}

export default Task2;
