function RadioButton({label,name,onChange,value,id}) {
  return (
    <div className="flex items-baseline gap-x-2">
      <input
        className="w-4 h-4 cursor-pointer accent-primary-800"
        type="radio"
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      />
      <label className="w-4 h-4 cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
