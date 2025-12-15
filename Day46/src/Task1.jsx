import React, { useState, useEffect } from "react";

function Task1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered!");
  }); // No dependency array → runs on every render

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Render Logger</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Task1;
