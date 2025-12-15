import React, { useEffect, useState } from "react";

function Task2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Loaded");
  }, []); // Empty dependency array → runs only once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Component Mounted Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Task2;
