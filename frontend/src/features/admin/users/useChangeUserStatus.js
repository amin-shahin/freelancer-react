import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const { mutateAsync: changeUserStatus, isPending: isChangingUserStatus } =
    useMutation({
      mutationFn: changeUserStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { changeUserStatus, isChangingUserStatus };
}
