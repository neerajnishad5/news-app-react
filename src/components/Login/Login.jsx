import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css"

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login">
          <label className="form-label" htmlFor="login" id="name">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            placeholder="email..."
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
        </div>
        <div className="password">
          <label className="form-label" htmlFor="password" id="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="password..."
            {...register("password")}
          />
        </div>
        <input className="btn btn-dark " type={"submit"} />
      </form>
    </div>
  );
}
