function Select({ options, value, onChange }) {
  return (
    <select onChange={onChange} value={value} className="bg-secondary-0 textField__input text-xs py-2">
      {options.map((item) => (
        <option key={item.value} value={item.value} >
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
