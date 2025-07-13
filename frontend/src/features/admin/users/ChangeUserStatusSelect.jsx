import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";
import Loader from "../../../ui/Loader";

function ChangeUserStatusSelect({ userId, onClose }) {
  const options = [
    { label: "رد", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید", value: 2 },
  ];

  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isChangingUserStatus } = useChangeUserStatus();

  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    if (data) {
      await changeUserStatus(
        { userId, ...data },
        {
          onSuccess: () => {
            onClose();
            queryClient.invalidateQueries({
              queryKey: ["all-users"],
            });
          },
        }
      );
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect register={register} name={"status"} options={options} />
        {isChangingUserStatus ? (
          <div className="flex justify-center w-full">
            <Loader />
          </div>
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </form>
    </div>
  );
}

export default ChangeUserStatusSelect;
