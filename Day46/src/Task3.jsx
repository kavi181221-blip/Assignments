import React, { useState, useEffect } from "react";

function Task3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs only when count changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Task3;
