function Button(props) {
  const { value, onClick } = props;
  return (
    <button style={{ padding: "10px", fontSize: "1em" }} onClick={onClick}>
      {value}
    </button>
  );
}
export default Button;
