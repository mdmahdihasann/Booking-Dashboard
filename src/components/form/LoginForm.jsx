import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";

const LoginForm = () => {
  return (
    <>
      <form className="h-screen m-auto">
        <FieldSet label="LOGIN PAGE">
          <Field label="User Name">
            <input type="email" name="email" id="email" placeholder="enter your name"/>
          </Field>
          <Field label="Password">
            <input type="password" name="password" id="password" placeholder="enter your password"/>
          </Field>
        </FieldSet>
      </form>
    </>
  );
};

export default LoginForm;
