import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./SelectCountry.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

export default function SelectCountry() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const countryName = data.country;
    console.log(countryName);
    switch (countryName) {
      case "us":
        navigate("america", {
          state: {
            country: "us",
          },
        });
        break;
      case "au":
        navigate("australia", {
          state: {
            country: "au",
          },
        });
        break;

      case "ru":
        navigate("russia", {
          state: {
            country: "ru",
          },
        });
        break;

      case "fr":
        navigate("france", {
          state: {
            country: "fr",
          },
        });
        break;

      default:
        navigate("/");
        break;
    }
  };

  return (
    <form
      className="country-form d-flex flex-row justify-content-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="select-country">
        <label htmlFor="country" className="form-label label">
          <h3 className="heading">Find news by country</h3>
        </label>
        <select className="form-control form-select" {...register("country")}>
          <option selected>-- Select Country --</option>
          <option value="us">USA</option>
          <option value="au">Australia</option>
          <option value="ru">Russia</option>
          <option value="fr">France</option>
        </select>
        <input className="btn btn-input" type="submit" />
      </div>
    </form>
  );
}
