import { useForm } from "react-hook-form";
import TextFieldInputRHF from "../../ui/TextFieldInputRHF";

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm) => {
    console.log(dataForm);
  };

  return (
    <div>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا عنوان را وارد نمایید",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
          name={"title"}
          required
          label={"عنوان پروژه"}
        />

        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا توضبحات را وارد نمایید",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
          name={"description"}
          required
          label={"توضیحات"}
        />

        <TextFieldInputRHF
          register={register}
          errors={errors}
          validationSchema={{
            required: "لطفا مبلغ را به ریال وارد نمایید",
            minLength: {
              value: 5,
              message: "حداقل 5 عدد وارد کنید",
            },
          }}
          name={"budget"}
          required
          label={"بودچه"}
        />

        <button type="submit" className="btn btn--primary">
          ایجاد پروژه
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
