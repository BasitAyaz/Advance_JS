import { useEffect, useState } from "react";
function Contact() {
  const [dt, setDet] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setDet(json);
      });
  }, []);

  return (
    <>
      {dt.map((e, i) => {
        return <p key={i}>{e.id}</p>;
      })}
      <h1>Contact</h1>
    </>
  );
}
export default Contact;
