const Task7=({color="blue",size="medium",text="click"})=>{
  const styles = {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    padding:
      size === "small"
        ? "6px 12px"
        : size === "large"
        ? "14px 24px"
        : "10px 18px", // medium (default)
    fontSize:
      size === "small"
        ? "12px"
        : size === "large"
        ? "18px"
        : "14px"
  };
  return <button style={styles}>{text}</button>;
}
export default Task7;