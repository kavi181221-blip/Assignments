import React, { useState } from "react";

function Task8() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        ➖ Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default Task8;
