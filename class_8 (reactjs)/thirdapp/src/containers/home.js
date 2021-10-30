import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();

  const routeChange = () => {
    history.push("/contact");
  };
  const sendData = () => {
    let obj = {
      name: "Ali",
      age: 18,
      institute: "SAIMS",
    };

    history.push("/service", obj);
  };
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">SAervices</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/profile/123">Profile</Link>
        </li>
      </ul>

      <button onClick={routeChange}>Go to Contact Page</button>
      <button onClick={() => history.push("/service")}>
        Go to Service Page
      </button>
      <button onClick={sendData}>Send Data</button>
    </>
  );
}
export default Home;
