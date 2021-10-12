import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import css from "./lnput.module.css";
import InputField from "../components/form/InputField";
const Resistor = () => {
  const [values, setValue] = useState({});
  const loginField = [
    {
      type: "text",
      class: `${css.name__field}`,
      name: "username",
      placeholder: "UserName",
      required: true,
    },
    {
      type: "email",
      class: `${css.email__field}`,
      name: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      type: "password",
      class: `${css.password__field}`,
      name: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];
  const handlechange = (input) => (event) => {
    if (input === "text") {
      input = "username";
    }
    setValue({ ...values, [input]: event.target.value });
  };
  const handleResistor = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className={css.login__container}>
      <div className={css.login__wrapper}>
        <TwitterIcon className={css.twitter_logo} />
        <h2 className={css.login_heading}>Happening now</h2>
        <h4>Join Twitter today.</h4>
        <div className={css.form__wrapper}>
          <form onSubmit={handleResistor}>
            {loginField.map((eachField, idx) => {
              return (
                <InputField
                  eachField={eachField}
                  keys={idx}
                  handlechange={handlechange}
                />
              );
            })}

            <button className={css.login__button}>Resistor</button>
            <p>
              Already have an account?{" "}
              <Link to="login" className={css.signup__link}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resistor;
