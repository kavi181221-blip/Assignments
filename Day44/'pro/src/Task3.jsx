import React from "react";

function Task3() {
  const cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>City List</h2>

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task3;
