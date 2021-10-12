import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import css from "./lnput.module.css";
import InputField from "../components/form/InputField";

const Login = () => {
  const [values, setValue] = useState({});

  const loginField = [
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
    setValue({ ...values, [input]: event.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className={css.login__container}>
      <div className={css.login__wrapper}>
        <TwitterIcon className={css.twitter_logo} />
        <h2 className={css.login_heading}>Happening now</h2>
        <h4>Sign in to Twitter</h4>
        <div className={css.form__wrapper}>
          <form onSubmit={handleLogin}>
            {loginField.map((eachField, idx) => {
              return (
                <>
                  <InputField
                    eachField={eachField}
                    keys={idx}
                    handlechange={handlechange}
                  />
                </>
              );
            })}

            <button className={css.login__button}>Login</button>
            <p>
              Don't have an account?{" "}
              <Link to="signup" className={css.signup__link}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
