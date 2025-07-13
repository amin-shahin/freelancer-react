function RadioButton({ label, name, value, id, register, watch, errors ,validationSchema}) {
  return (
    <div className="flex items-baseline gap-x-2">
      <input
        className="w-4 h-4 cursor-pointer accent-primary-800"
        type="radio"
        value={value}
        name={name}
        id={id}
        {...register(name, validationSchema)}
        errors={errors}
        watch={watch(name)}
      />
      <label className="w-4 h-4 cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
