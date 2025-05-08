import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";

function AuthContainer() {
  const [step, setStep] = useState("checkOtp");
  const [phoneNumber, setPhoneNumber] = useState(null);

  const {
    data:sendOtpResponse,
    isPending: isSendingCode,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep("checkOtp");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case "sendOtp":
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmitProp={sendOtpHandler}
            isSendingCode={isSendingCode}
          />
        );
      case "checkOtp":
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            backStepOtp={setStep}
            resendOtpCode={sendOtpHandler}
            sendOtpResponse={sendOtpResponse}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
}

export default AuthContainer;
