import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import css from "./lnput.module.css";
import InputField from "../components/form/InputField";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const history = useHistory();
  const [values, setValue] = useState({});
  const [ErrorMessage, setErrorMessage] = useState("");
  const loginField = [
    {
      type: "email",
      class: `${css.email__field}`,
      name: "email",
      placeholder: "Enter your email",
      required: true,
      id: "email",
    },
    {
      type: "password",
      class: `${css.password__field}`,
      name: "password",
      placeholder: "Enter your password",
      required: true,
      id: "password",
    },
  ];

  const handlechange = (input) => (event) => {
    setValue({ ...values, [input]: event.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("authorization", res.data.token);
      const storeData = {
        userID: res.data.userID,
        userName: res.data.userName,
        token: res.data.token,
      };
      localStorage.setItem("userdata", JSON.stringify(storeData));
      history.push("/");
      console.log("login..................");
    } catch (error) {
      error.response.data.message &&
        setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className={css.login__container}>
      <div className={css.login__wrapper}>
        <TwitterIcon className={css.twitter_logo} />
        {ErrorMessage && <p className={css.error__message}>{ErrorMessage}</p>}
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
                    emailValue={values.email}
                    passwordValue={values.password}
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
