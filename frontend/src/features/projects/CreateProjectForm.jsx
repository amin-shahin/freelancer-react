import { useForm } from "react-hook-form";
import TextFieldInputRHF from "../../ui/TextFieldInputRHF";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../categories/useCategories";
import useCreateProjectForm from "./useCreateProjectForm";
import useEditProjectForm from "./useEditProjectForm";
import Loader from "../../ui/Loader";

function CreateProjectForm({ onClose, toEditProject = {} }) {
  const {
    _id: editId,
    budget,
    deadline,
    title,
    description,
    category,
    tags: prevTags,
  } = toEditProject;
  const isEditMode = Boolean(editId);

  let editValues = {};
  if (isEditMode) {
    editValues = {
      budget,
      title,
      description,
      category: category._id,
    };
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || new Date());

  const { categories, transformedCategories, isLoading } = useCategories();

  const { createProject, isCreatingLoading } = useCreateProjectForm();

  const { editProject, isEditingLoading } = useEditProjectForm();

  const onSubmit = (dataForm) => {
    const newProject = {
      ...dataForm,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditMode) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div className="">
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
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
        <RHFSelect
          register={register}
          name="category"
          label={"دسته بندی"}
          validationSchema={{}}
          errors={errors}
          required
          options={categories}
        />

        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="تگ را وارد کنید"
        />

        <DatePickerField label={"ددلاین"} date={date} setDate={setDate} />

        {isEditingLoading || isCreatingLoading ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary mt-3">
            {isEditMode ? "ویرایش" : <span>ایجاد پروژه</span>}
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProjectForm;
