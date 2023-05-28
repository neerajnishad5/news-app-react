import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="username">
          <label className="form-label" htmlFor="email" id="name">
            Name
          </label>
          <input
            className="form-control"
            type="email"
            placeholder="name..."
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
        </div>
        <div className="email">
          <label className="form-label" htmlFor="email" id="name">
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
