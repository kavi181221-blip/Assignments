import React, { useState, useEffect } from "react";

function Task5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]); // Runs whenever count changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Document Title Counter</h2>
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

export default Task5;
