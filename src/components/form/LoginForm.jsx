import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInWithGoogle,
  signWithloginAndAccount,
} from "../firebase/firebase";

const LoginForm = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signWithloginAndAccount(email, password);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <FieldSet label="LOGIN PAGE">
          <Field label="User Name">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <button type="submit" onClick={handleLogin}>
            Submit
          </button>
        </FieldSet>
      </form>

      <p>
        with out login 1st time <NavLink to="/register">Register</NavLink>
      </p>
      <p>
        You Forget Password so you can change{" "}
        <NavLink to="/forget">ForgetPassword</NavLink>
      </p>
      <p>
        with out login 1st time{" "}
        <button onClick={handleGoogleLogin}>Google Login</button>
      </p>
    </>
  );
};

export default LoginForm;
