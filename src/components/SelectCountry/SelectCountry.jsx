import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./SelectCountry.css";

export default function SelectCountry() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const countryName = data.country;
    console.log(countryName);
    switch (countryName) {
      case "us":
        navigate("us");
        break;
      case "china":
        navigate("china");
        break;

      case "russia":
        navigate("russia");
        break;

        case "england":
        navigate("england");
        break;

      default:
        navigate("/");
        break;
    }
  };

  return (
    <form className="country-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="select-country">
        <label htmlFor="country" className="form-label label">
          Find news by country
        </label>
        <select className="form-control form-select" {...register("country")}>
          <option selected>-- Select Country --</option>
          <option value="america">USA</option>
          <option value="china">China</option>
          <option value="russia">Russia</option>
          <option value="england">UK</option>
        </select>
        <input className="btn btn-input" type="submit" />
      </div>
    </form>
  );
}
