const Task6 = ({ name, job, avatar }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "16px",
      width: "260px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px"
        }}
      />

      <h2>{name}</h2>
      <p style={{ color: "gray" }}>{job}</p>
    </div>
  );
};

export default Task6;
