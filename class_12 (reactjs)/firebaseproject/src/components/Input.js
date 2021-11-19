function Input(props) {
  const { placeholder, onChange, type, value } = props;
  return (
    <input
      value={value}
      style={{ padding: "10px", fontSize: "1em" }}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}
export default Input;
