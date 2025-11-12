import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";
import { createWithEmail } from "../firebase/firebase";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleResSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createWithEmail(email, password);
      console.log(user);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <FieldSet label="Is a Register Form">
          <Field label="Email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
        </FieldSet>
        <button type="submit" onClick={handleResSubmit}>
          Register
        </button>
      </form>

      <p>Already have and account? {" "}
        <NavLink to="/login">Login</NavLink>
      </p>
    </>
  );
};

export default RegisterForm;
