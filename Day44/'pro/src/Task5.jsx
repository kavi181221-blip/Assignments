import React from "react";

function Task5() {
  const items = []; // empty array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Data List</h2>

      {items.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task5;
