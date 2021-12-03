import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("User Name");
  const [loader, setLoader] = useState(false);

  const dataFromRedux = useSelector((a) => a);

  // let getData = () => {
  //   let data = "dsafasd";
  //   if (Array.isArray(data) && data.length > 0) {
  //     console.log("Data is present");
  //   }
  // };
  // getData();

  let getDataFromAPI = () => {
    setLoader(true);
    let data = "Basit Ahmed";
    if (data) {
      setLoader(false);
      setName(data);
    }
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => getDataFromAPI()}>Get Data From API</button>
      {loader ? <p>Loading...</p> : <p>{name}</p>}

      <h2>{dataFromRedux.text}</h2>
    </>
  );
}
export default Home;
