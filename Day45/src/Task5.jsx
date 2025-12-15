import React, { useState } from "react";

function Task5() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Form</h2>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <p>
        {confirmPassword
          ? isMatch
            ? "✅ Passwords match"
            : "❌ Passwords do not match"
          : ""}
      </p>
    </div>
  );
}

export default Task5;
