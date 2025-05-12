import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import { Outlet } from "react-router";
import { get, useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState("sendOtp");
  // const [phoneNumber, setPhoneNumber] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const {
    data: sendOtpResponse,
    isPending: isSendingCode,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (formData) => {
    console.log(formData);
    
    // e.preventDefault();
    try {
      const data = await mutateAsync(formData);
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
            register={register}
            errors={errors}
            onSubmitProp={handleSubmit(sendOtpHandler)}
            isSendingCode={isSendingCode}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case "checkOtp":
        return (
          <CheckOTPForm
            phoneNumber={getValues('phoneNumber')}
            backStepOtp={setStep}
            resendOtpCode={handleSubmit(sendOtpHandler)}
            sendOtpResponse={sendOtpResponse}
            goToCompleteProfile={setStep}
          />
        );
      case "goToCompleteProfile":
        return <Outlet />;

      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
}

export default AuthContainer;
