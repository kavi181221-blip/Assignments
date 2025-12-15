import React, { useState } from "react";

function Task2() {
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User Type</h2>

      <button onClick={() => setIsPremiumUser(!isPremiumUser)}>
        Toggle Premium
      </button>

      <br /><br />

      {isPremiumUser && (
        <button style={{ backgroundColor: "gold" }}>
          Premium Feature
        </button>
      )}
    </div>
  );
}

export default Task2;
