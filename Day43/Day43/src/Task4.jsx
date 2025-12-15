import React, { useState } from 'react'

function Task4() {
    const [number,setNumber]=useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>
        {number !== "" &&
          (number % 2 === 0 ? "Even" : "Odd")}
      </p>
    </div>
  );
}


export default Task4