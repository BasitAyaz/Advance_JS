import { useEffect, useState } from "react";
import { getData } from "../config/action";
import { useDispatch, useSelector } from "react-redux";

function About() {
  // const [data, setData] = useState({
  //   user: false,
  // });

  const dispatch = useDispatch();
  const dataFromAPI = useSelector((a) => a);
  console.log(dataFromAPI.apiData);
  useEffect(() => {
    dispatch(getData);
  }, []);

  return (
    <>
      <h1>About</h1>
      {/* <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <input
        value="Update"
        type="button"
        onClick={(e) => setData({ ...data, user: true })}
      /> */}
    </>
  );
}
export default About;
