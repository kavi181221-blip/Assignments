import React, { useState } from "react";

function Task3() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Task3;
