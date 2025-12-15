import React from "react";

function Task10() {
  const students = [
    { id: 1, name: "Kavi", isPresent: true },
    { id: 2, name: "Arun", isPresent: false },
    { id: 3, name: "Meena", isPresent: true },
    { id: 4, name: "Ravi", isPresent: false },
  ];

  return (
    <div style={{ maxWidth: "350px", margin: "50px auto" }}>
      <h2>Student Attendance</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} —{" "}
            {student.isPresent ? (
              <span style={{ color: "green" }}>Present</span>
            ) : (
              <span style={{ color: "red" }}>Absent</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task10;
