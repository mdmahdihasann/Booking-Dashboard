import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";

import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onhandle = (onAddd) => {
    console.log(onAddd);
    const user = { email: "sojibe@gmail.com", password: "12345678" };

    const login =
      onAddd.email === user.email && onAddd.password === user.password;

    if (!login) {
      setError("loginError", {
        type: "custom",
        message: "this field is occourd",
      });
    }else{
        console.log("login successfully!");
        
    }
  };
  return (
    <>
      <form className="h-screen m-auto" onSubmit={handleSubmit(onhandle)}>
        <FieldSet label="LOGIN PAGE">
          <Field label="User Name" error={errors.email}>
            <input
              {...register("email", { required: "Email Field is Required" })}
              type="email"
              name="email"
              id="email"
              placeholder="enter your name"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "password Field is Required",
                minLength: {
                  value: 8,
                  message: "your password must be at latest 8 characters",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
            />
          </Field>
          <button type="submit">Submit</button>
          <div>{errors?.loginError?.message}</div>
        </FieldSet>
      </form>
    </>
  );
};

export default LoginForm;
