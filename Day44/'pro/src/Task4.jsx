import React from "react";

function Task4() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bangalore" },
    { id: 3, name: "Hyderabad" },
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Delhi" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>City List</h2>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task4;
