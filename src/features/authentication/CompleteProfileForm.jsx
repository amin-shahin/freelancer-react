import { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import RadioButton from "../../ui/radioButton";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const { data, isPending, mutateAsync, error } = useMutation({
    mutationFn: completeProfile,
  });

  const completeProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });

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
      }
    } catch (error) {
      
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="w-full flex flex-col gap-4 sm:max-w-sm"
        onSubmit={completeProfileHandler}
      >
        <TextFieldInput
          label={"نام و نام خانوادگی"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextFieldInput
          label={"ایمیل"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-around">
          <RadioButton
            label={"کارفرما"}
            id={"OWNER"}
            name={"role"}
            onChange={(e) => setRole(e.target.value)}
            value="OWNER"
          />
          <RadioButton
            label={"فریلنسر"}
            id={"FREELANCER"}
            name={"role"}
            onChange={(e) => setRole(e.target.value)}
            value="FREELANCER"
          />
        </div>
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
