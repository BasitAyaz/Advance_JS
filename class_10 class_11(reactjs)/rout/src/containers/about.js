import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  let obj = {
    name: "Ali",
    id: 786,
    age: 18,
  };
  const move = () => {
    navigate(`/profile/${obj.id}`);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(e) =>
                e.isActive ? "active" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(routeStatus) =>
                routeStatus.isActive ? "active" : ""
              }
              to="/about"
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>About</h1>
      <button onClick={move}>Route to Profile</button>
    </>
  );
}
export default About;
