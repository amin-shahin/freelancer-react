function RHFSelect({
  register,
  errors,
  name,
  label,
  validationSchema,
  options,
  required,
}) {
  return (
    <div className="flex flex-col gap-y-3">
      <label className="text-start" htmlFor={name}>
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <select className="textField__input" {...register(name, validationSchema)} errors={errors}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-sm text-rose-500 test-start">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
