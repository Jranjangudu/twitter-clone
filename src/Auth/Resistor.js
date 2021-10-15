import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import css from "./lnput.module.css";
import InputField from "../components/form/InputField";
import axios from "axios";
const Resistor = () => {
  const history = useHistory();
  const [values, setValue] = useState({});
  const [resistorMessage, setResistorMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const loginField = [
    {
      type: "text",
      class: `${css.name__field}`,
      name: "username",
      placeholder: "UserName",
      required: true,
      id: "username",
    },
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
    if (input === "text") {
      input = "username";
    }
    setValue({ ...values, [input]: event.target.value });
  };
  const handleResistor = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        userName: values.username,
        email: values.email,
        password: values.password,
      });
      setResistorMessage(res.data.message);
      setTimeout(() => {
        setResistorMessage("");
        history.push("/login");
      }, 2000);
      setValue({
        username: "",
        email: "",
        password: "",
      });
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
        {resistorMessage ? (
          <p className={css.success__message}>{resistorMessage}</p>
        ) : (
          ErrorMessage && <p className={css.error__message}>{ErrorMessage}</p>
        )}
        <h2 className={css.login_heading}>Happening now</h2>
        <h4>Join Twitter today.</h4>

        <div className={css.form__wrapper}>
          <form onSubmit={handleResistor}>
            {loginField.map((eachField, idx) => {
              return (
                <InputField
                  eachField={eachField}
                  keys={idx}
                  value={values}
                  emailValue={values.email}
                  passwordValue={values.password}
                  usernameValue={values.username}
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
