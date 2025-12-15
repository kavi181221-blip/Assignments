import React, { useState } from "react";

function Task9() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Notifications</h2>

      <button onClick={() => setCount(count + 1)}>
        Add Notification
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Clear
      </button>

      <br /><br />

      {/* Show badge only if count > 0 */}
      {count > 0 && (
        <span
          style={{
            background: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "50%",
            fontWeight: "bold",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default Task9;
