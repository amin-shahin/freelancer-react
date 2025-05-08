import TextFieldInput from "../../ui/TextFieldInput";
import Loader from "../../ui/Loader";

function SendOTPForm({  phoneNumber, onChange, onSubmitProp ,isSendingCode}) {


  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="w-full flex flex-col gap-4 sm:max-w-sm"
        onSubmit={onSubmitProp}
      >
        <TextFieldInput
          name={"phoneNumber"}
          label={"شماره موبایل"}
          value={phoneNumber}
          onChange={onChange}
        />
        <div className="w-full">
          {isSendingCode ? (
            <Loader />
          ) : (
            <button className="w-full btn btn--primary">ارسال کد تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
