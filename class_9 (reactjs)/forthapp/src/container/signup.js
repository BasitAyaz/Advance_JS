import Input from "../component/Input";
import Button from "../component/Buttton";
import { useState } from "react";
import Firebase from "../config/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup = () => {
    let obj = {
      email,
      name,
      password,
    };
    console.log(obj);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <div>
          <Input
            placeholder="User Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <Button value="Sign up" onClick={signup} />
        </div>
      </div>
    </>
  );
}
export default Signup;
