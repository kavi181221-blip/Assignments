import React, { useState } from "react";

function Task9() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission
    }

    alert(`Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "350px", margin: "50px auto", textAlign: "center" }}>
      <h2>Validated Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        <button type="submit" style={{ padding: "8px 16px", marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Task9;
