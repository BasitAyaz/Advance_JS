import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../config/action";

function DataFile() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);

  const addText = () => {
    console.log(text);
    dispatch({
      type: "DATAFROMDATAFILE",
      text,
    });
  };

  useEffect(() => {
    let obj = {
      userName: "ABC",
      age: 24,
    };
    getData(obj);
  }, []);

  return (
    <>
      <h1>Data File</h1>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addText}>Add</button>
      </div>
      <div>
        <h2>{dataFromRedux.text}</h2>
      </div>
    </>
  );
}
export default DataFile;
