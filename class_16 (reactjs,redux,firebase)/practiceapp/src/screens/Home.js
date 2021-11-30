import { useSelector } from "react-redux";

function Home() {
  const dataFromRedux = useSelector((a) => a);
  return (
    <>
      <h1>Home</h1>
      <h2>{dataFromRedux.text}</h2>
    </>
  );
}
export default Home;
