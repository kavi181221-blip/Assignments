import React, { useState } from "react";

function Task5() {

  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button onClick={() => setColor("lightgreen")}>
        Change Background
      </button>
    </div>
  );
}

export default Task5;