function Input(props) {
  const { placeholder, onChange, type } = props;
  return <input placeholder={placeholder} type={type} onChange={onChange} />;
}
export default Input;
