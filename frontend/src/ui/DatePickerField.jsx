import  DatePicker  from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function DatePickerField({ label, date, setDate }) {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-secondary-800 text-start">{label}</span>
      <DatePicker
        containerClassName={"w-full"}
        inputClass={"textField__input"}
        calendarPosition={"bottom-center"}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        value={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}

export default DatePickerField;
