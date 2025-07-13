import { useForm } from "react-hook-form";
import TextFieldInputRHF from "../../ui/TextFieldInputRHF";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";

function CreateProposalForm({ onClose, projectId }) {
  const { createProposal, isCreatingProposal } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };
  return (
    <div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا توضیحات را وارد نمایید",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
          name={"description"}
          required
          label={"توضیحات "}
        />
        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا هزینه انجام پروژه را وارد نمایید",
            minLength: {
              value: 4,
              message: "حداقل 4 کاراکتر وارد کنید",
            },
          }}
          type="number"
          name={"price"}
          required
          label={"هزینه "}
        />
        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا زمان انجام پروژه را وارد نمایید",
            minLength: {
              value: 1,
              message: "حداقل 1 کاراکتر وارد کنید",
            },
          }}
          type="number"
          name={"duration"}
          required
          label={"زمان انجام "}
        />
        {isCreatingProposal ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary mt-3 w-full">
            درخواست
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProposalForm;
