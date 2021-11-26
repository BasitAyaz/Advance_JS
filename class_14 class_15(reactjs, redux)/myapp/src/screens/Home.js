import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dataFromRedux = useSelector((abc) => abc);
  const dispatch = useDispatch();
  const update = () => {
    let obj = {
      userName: "Ali",
      age: 55,
    };

    dispatch({
      type: "UPDATEINITIALSTATE",
      ...obj,
    });
  };
  console.log(dataFromRedux);
  return (
    <>
      <h1>{dataFromRedux.userName}</h1>
      <button onClick={update}>UPDATE</button>
    </>
  );
}
export default Home;
