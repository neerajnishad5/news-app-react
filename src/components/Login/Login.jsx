import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
const clientId = import.meta.env.VITE_CLIENT_ID;
import { gapi } from "gapi-script";
import AuthLogin from "../AuthLogin";
import ToggleButton from "../ToggleButton/ToggleButton";
import ScrollBar from "../ScrollBar/ScrollBar";
import { Helmet } from "react-helmet";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="form">
      <div>
        <Helmet>
          <title>Login | 24xNews</title>
        </Helmet>
      </div>
      <h2 className="mb-3 text-center">Login</h2>
      <div className="d-flex justify-content-center">
        <AuthLogin />
      </div>
      <hr />
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
        <input className="btn btn-form " type={"submit"} />
      </form>
    </div>
  );
}
