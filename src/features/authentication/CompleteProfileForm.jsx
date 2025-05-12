import { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import RadioButton from "../../ui/radioButton";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import TextFieldInputRHF from "../../ui/TextFieldInputRHF";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const { data, isPending, mutateAsync, error } = useMutation({
    mutationFn: completeProfile,
  });

  const completeProfileHandler = async (data) => {
    // e.preventDefault();
    console.log(data);

    try {
      // const { user, message } = await mutateAsync({ name, email, role });
      const { user, message } = await mutateAsync(data);

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
      if (isActive) {
        if (user.role === "FREELANCER") return navigate("/freelancer");
        if (user.role === "OWNER") return navigate("/owner");
        if (user.role === "ADMIN") return navigate("/admin");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="w-full flex flex-col gap-4 sm:max-w-sm"
        onSubmit={handleSubmit(completeProfileHandler)}
      >
        <TextFieldInputRHF
          label={"نام و نام خانوادگی"}
          name={"name"}
          register={register}
          required
          validationSchema={{
            required: "نام و نام خانوادگی الزامی است",
            minLength: { value: 5, message: "حداقل 5 کاراکتر وارد نمایید" },
            maxLength: {
              value: 60,
              message: "حداکثر 60 کاراکتر میتوان وارد کرد",
            },
          }}
          errors={errors}

          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <TextFieldInputRHF
          label={"ایمیل"}
          name={"email"}
          required
          register={register}
          validationSchema={{
            required: " ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است.",
            },
          }}

          errors={errors}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <RadioInputGroup
          errors={errors}
          register={register}
          watch={watch}
          config={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است." },
            options: [
              { label: "کارفرما", value: "OWNER" },
              { label: "فریلنسر", value: "FREELANCER" },
            ],
          }}

        />

        <div className="w-full">
          {isPending ? (
            <Loader />
          ) : (
            <button className="w-full btn btn--primary"> ثبت اطلاعات</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
