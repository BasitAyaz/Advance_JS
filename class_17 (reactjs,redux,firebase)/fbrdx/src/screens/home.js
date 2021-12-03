import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";

function Home() {
  const navigate = useNavigate();
  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);

  let goToLogin = () => {
    navigate("/login");
  };
  let goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToSignUp}>Sign Up</Button>
      </div>
    </>
  );
}
export default Home;
