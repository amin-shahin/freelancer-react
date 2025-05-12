import RadioButton from "./radioButton";

function RadioInputGroup({ register, errors, watch, config }) {
  const { name, validationSchema = {}, options } = config;
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-around">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            value={option.value}
            label={option.label}
            register={register}
            id={option.value}
            watch={watch}
            errors={errors}
            name={name}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors[name] && <span  className="text-sm text-rose-500 text-start">{errors[name]?.message}</span>}
    </div>
  );
}

export default RadioInputGroup;
