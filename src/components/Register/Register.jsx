import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import GoogleSignInIcon from "../GoogleSignInIcon/GoogleSignInIcon";
import AuthLogin from "../AuthLogin";
import { Helmet } from "react-helmet";

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
      <div>
            <Helmet>
              <title>
                Register | 24xNews
              </title>
            </Helmet>
          </div>
      <h2 className="mb-3 text-center">Register</h2>
      <div className="d-flex justify-content-center">
        <AuthLogin action={"Sign up with Google"} />
      </div>
      <hr />
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
        <input className="btn btn-form " type={"submit"} />
      </form>
    </div>
  );
}
