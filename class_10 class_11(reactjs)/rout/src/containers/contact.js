import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [dt, setDet] = useState([]);

  const apiHandle = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  const getData = (id) => {
    // const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // axios.get(api).then((res) => {
    //   console.log(res.data);
    // });

    // apiHandle.get("/").then((e) => {
    //   console.log(e.data);
    // });
    // apiHandle.get("/10").then((e) => {
    //   console.log(e.data);
    // });
    // apiHandle.post("/", { name: "something" }).then((e) => {
    //   console.log(e);
    // });
    apiHandle.delete("/50");
  };

  useEffect(() => {
    getData(4);  
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
