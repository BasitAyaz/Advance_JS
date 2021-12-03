import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import Input from "../components/input";
import { signUp } from "../config/firebasefunc";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let signup = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
      name,
    };
    dispatch(() => signUp(obj, navigate));
  };

  return (
    <>
      <div className="head">
        <h1>Sign Up</h1>
      </div>
      <div>
        <form onSubmit={(e) => signup(e)}>
          <div>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <Button>Sign Up</Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
