import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="flex flex-col gap-4">
        <p className="text-lg">کد تایید را وارد نمایید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex justify-center gap-x-2"
          inputStyle={'!w-12 p-2 border border border-secondary-400 rounded-lg'}
        />
      </form>
    </div>
  );
}

export default CheckOTPForm;
