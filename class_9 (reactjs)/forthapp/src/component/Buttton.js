function Button(props) {
  const { value, onClick } = props;
  return <button onClick={onClick}>{value}</button>;
}
export default Button;
