import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { useForm } from "react-hook-form";

const AddCareer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Editor
        apiKey="yiugd3xtqtw63wiq4wpkyw9qx30b0gil37a9voubxh4evezq"
        {...register("details", { required: true })}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          setup: (editor) => {
            editor.on("Change", () => {
              setValue("details", editor.getContent());
            });
          },
        }}
      />

      <button
        type="submit"
        className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Add News
      </button>
    </form>
  );
};

export default AddCareer;
