import { useState } from "react";

function TextFieldInput({ label, name, onChange, value,type='text' }) {
  return (
    <>
      <label htmlFor={name} className="text-secondary-800 text-start">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
    </>
  );
}

export default TextFieldInput;
