const ProgressInput = ({ onProgressChange }) => {
  return (
    <input
      type="number"
      placeholder="Enter kilometers walked"
      onChange={(e) => onProgressChange(Number(e.target.value))}
      style={{ padding: "10px", fontSize: "16px", width: "200px" }}
    />
  );
};

export default ProgressInput;
