import React, { useState } from "react";

function Task8() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Profile Update Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={user.age}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={user.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <button type="submit" style={{ padding: "8px 16px" }}>Update Profile</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h3>Live Preview:</h3>
      <p><strong>Name:</strong> {user.name || "-"}</p>
      <p><strong>Age:</strong> {user.age || "-"}</p>
      <p><strong>Email:</strong> {user.email || "-"}</p>
      <p><strong>Phone:</strong> {user.phone || "-"}</p>
    </div>
  );
}

export default Task8;
