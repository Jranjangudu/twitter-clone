import React from "react";

const InputField = ({ eachField, keys, handlechange }) => {
  return (
    <>
      <input
        key={keys}
        type={eachField.type}
        name={eachField.name}
        placeholder={eachField.placeholder}
        required={eachField.required}
        className={eachField.class}
        onChange={handlechange(eachField.type)}
      />
    </>
  );
};

export default InputField;
