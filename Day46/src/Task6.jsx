import React, { useState, useEffect } from "react";

function Task6() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []); // Run once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Live Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Task6;
