import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";

import { useFieldArray, useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });
  const registers = (regData) => {
    console.log(regData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(registers)}>
        <FieldSet label="Is a Register Form">
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", { required: "fName field is requerd" })}
              type="text"
              name="fname"
              id="fname"
              placeholder="first name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", { required: "age field is requerd" })}
              type="number"
              name="age"
              id="age"
              placeholder="age"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "email field is requerd" })}
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "password field is requerd",
                minLength: {
                  value: 8,
                  message: "this password length is minimun 8 lenght",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </Field>
        </FieldSet>
        <FieldSet>
          {fields.map((field, index) => (
            <div key={field.id} className="d-flex gap-2">
              <Field label="Social Name" >
                <input
                  {...register(`socials[${index}].name`, {
                    required: "social name field is requerd",
                  })}
                  type="text"
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                  placeholder="social name"
                />
              </Field>
              <Field label="Url">
                <input
                  {...register(`socials[${index}].url`, {
                    required: "url field is requerd",
                  })}
                  type="text"
                  name={`socials[${index}].url`}
                  id={`socials[${index}].url`}
                  placeholder="social url"
                />
              </Field>
              <button onClick={()=>remove(index)}>Remove</button>
            </div>
          ))}

          <button onClick={() => append({ name: "", url: "" })}>
            AddField
          </button>
        </FieldSet>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
