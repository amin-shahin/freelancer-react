import { useState } from "react";

function TextFieldInput({ label, name, onChange, value }) {
  return (
    <>
      <label htmlFor={name} className="text-secondary-800 text-end">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </>
  );
}

export default TextFieldInput;
