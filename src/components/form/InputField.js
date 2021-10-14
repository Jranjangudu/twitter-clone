import React from "react";

const InputField = ({
  eachField,
  keys,
  handlechange,
  emailValue,
  passwordValue,
  usernameValue,
}) => {
  return (
    <>
      <input
        key={keys}
        type={eachField.type}
        name={eachField.name}
        value={
          eachField.id === "username"
            ? usernameValue
            : eachField.id === "email"
            ? emailValue
            : eachField.id === "password"
            ? passwordValue
            : null
        }
        placeholder={eachField.placeholder}
        required={eachField.required}
        className={eachField.class}
        onChange={handlechange(eachField.type)}
      />
    </>
  );
};

export default InputField;
