import React, { useState } from "react";

function Task10() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      feedback,
      rating,
      subscribe,
    };

    console.log("Feedback Submitted:", formData);
    alert("Feedback submitted! Check console for details.");

    // Clear form
    setFeedback("");
    setRating("");
    setSubscribe(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Feedback Text */}
        <textarea
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          required
        />

        {/* Rating */}
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          <option value="">-- Select Rating --</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            style={{ marginRight: "5px" }}
          />
          Subscribe to newsletter
        </label>

        <br /><br />

        <button type="submit" style={{ padding: "8px 16px" }}>Submit Feedback</button>
      </form>
    </div>
  );
}

export default Task10;
