import React, { useState } from "react";

function Task7() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: isDark ? "#222" : "#f5f5f5",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Task7;
