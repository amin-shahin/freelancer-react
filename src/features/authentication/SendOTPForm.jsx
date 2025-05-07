import { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-full flex flex-col gap-4 sm:max-w-sm">
        <TextFieldInput
          name={"phoneNumber"}
          label={"شماره موبایل"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
