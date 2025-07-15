import TextFieldInputRHF from "../../ui/TextFieldInputRHF";
import Loader from "../../ui/Loader";

function SendOTPForm({ register,errors, onSubmitProp ,isSendingCode}) {



  return (
    <div className="w-full flex justify-center items-center height-screen-minus-footer bg-secondary-0">
      <form
        className="w-full flex flex-col gap-4 sm:max-w-sm"
        onSubmit={onSubmitProp}
      >
        <TextFieldInputRHF
          label={"شماره موبایل"}
          name={'phoneNumber'}
          register={register}
          required
          errors={errors}
          type={'number'}
          
        />

        <div className="w-full">
          {isSendingCode ? (
            <Loader />
          ) : (
            <button type="submit" className="w-full btn btn--primary">ارسال کد تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
