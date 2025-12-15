import React from "react";

function Task8() {
  const users = [
    { id: 1, name: "Kavi", age: 22 },
    { id: 2, name: "Arun", age: 25 },
    { id: 3, name: "Meena", age: 23 },
  ];

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task8;
