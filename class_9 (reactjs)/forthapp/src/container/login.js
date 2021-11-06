import { useState } from "react";
import Button from "../component/Buttton";
import Input from "../component/Input";
import Firebase from "../config/firebase/firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = () => {
    let obj = {
      email,
      password,
    };
    console.log(obj);
  };
  return (
    <>
      <h1>Login </h1>
      <div>
        <div>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button value="login" onClick={login} />
        </div>
      </div>
    </>
  );
}
export default Login;
