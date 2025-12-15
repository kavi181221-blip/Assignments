import React, { useState, useEffect } from "react";

function Task7() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Runs once on mount

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>GitHub User</h2>

      {user && (
        <>
          <img
            src={user.avatar_url}
            alt="Avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h3>{user.name || user.login}</h3>
        </>
      )}
    </div>
  );
}

export default Task7;
