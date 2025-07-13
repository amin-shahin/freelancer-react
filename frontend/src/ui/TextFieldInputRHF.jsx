function TextFieldInputRHF({
  name,
  type = "text",
  register,
  validationSchema,
  required,
  errors,
  label
}) {
  return (
    <div  className="flex flex-col gap-3">
      <label htmlFor={name} className="text-secondary-800 text-start">
        {label}
        {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        className="textField__input"
        type={type}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-rose-500 text-sm block text-start">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextFieldInputRHF;
