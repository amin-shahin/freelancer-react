import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loader from "../../ui/Loader";
import { HiArrowRight } from "react-icons/hi";

function CheckOTPForm({
  phoneNumber,
  backStepOtp,
  resendOtpCode,
  sendOtpResponse,
  goToCompleteProfile,
}) {
  const [otp, setOtp] = useState("");
  const [timerOtp, setTimerOtp] = useState(90);
  const navigate = useNavigate();

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer =
      timerOtp > 0 &&
      setInterval(() => {
        setTimerOtp((prevTime) => prevTime - 1);
      }, 1000);

    return () => {
      if (timerOtp) clearInterval(timer);
    };
  }, [timerOtp]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    const { message, user } = await mutateAsync({
      phoneNumber,
      otp,
    });
    toast.success(message);

    if (!user.isActive) {
      goToCompleteProfile("goToCompleteProfile");
      navigate("/auth/complete-profile");
      return;
    }
    if (user.status !== 2) {
      navigate("/");
      toast.error("پروفایل شما در انتظار تایید");
      return;
    }
    if (user.isActive) {
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "ADMIN") return navigate("/admin");
    }
    try {
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center  bg-secondary-0 text-secondary-800 height-screen-minus-footer">
      <form className="flex flex-col gap-5" onSubmit={checkOtpHandler}>
        {sendOtpResponse && (
          <div className="text-start ">
            <p className="text-sm">
              <span>{sendOtpResponse.message}</span>
              <span
                onClick={() => backStepOtp("sendOtp")}
                className="text-primary-800 cursor-pointer"
              >
                {" "}
                (ویرایش){" "}
              </span>
            </p>{" "}
          </div>
        )}

        <p className="text-lg text-bold mb-2">کد تایید را وارد نمایید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex justify-center gap-x-2 flex-row-reverse"
          inputStyle={"!w-12 p-2 border border border-secondary-400 rounded-lg "}
        />
        <div className="w-full">
          {isPending ? (
            <Loader />
          ) : (
            <button className="w-full btn btn--primary"> تایید</button>
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <button
            type="submit"
            className="flex gap-2 text-xs items-center"
            onClick={() => backStepOtp("sendOtp")}
          >
            <HiArrowRight />
            <p>بازگشت</p>
          </button>
          <div className="text-xs ">
            {timerOtp ? (
              <div>
                <span className="inline-flex text-rose-500">{timerOtp}</span>
                <p className="inline"> ثانیه تا ارسال مجدد کد </p>
              </div>
            ) : (
              <button onClick={resendOtpCode}>دریافت مجدد کد </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}


export default CheckOTPForm;
