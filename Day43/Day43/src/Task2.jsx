import React, { useState } from "react";

function Task2() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Task2;
