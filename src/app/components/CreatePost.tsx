"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Post from "@/app/_api/_post/post";
import routes from "../_api/_post/routes";

const CreatePost = () => {
  const { addPost } = Post();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue
  }: any = useForm({
    mode: "onTouched"
  });
  const [step, setStep] = useState(1);

  const onSubmit: any = (data: any) => {
    if (step === 1) {
      setStep(2);
    } else if (step == 2) {
      setStep(3);
    } else {
      try {
        addPost(data).then((response: any) => {
          if (!response?.error) {
           console.log(response)
          }
        });
      } catch (e: any) {
        console.log(e,'catch error')
      }
    }
    console.log(data, "data");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <div>
              <input
                className="form-control"
                placeholder="title"
                {...register("title", { required: "title is required" })}
              />
              {errors.title && <span>{errors?.title?.message}</span>}
            </div>
            <div>
              <input
                className="form-control"
                placeholder="price"
                {...register("price", {
                  pattern: {
                    value: /\d+/,
                    message: "please enter valid integer value"
                  },
                  required: "this is required"
                })}
              />

              {errors.price && <span>{errors?.price?.message}</span>}
            </div>
            <button
              onClick={() => {
                handleSubmit(onSubmit);
              }}
            >
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <input
                className="form-control"
                placeholder="description"
                {...register("description", { required: true })}
              />
              {errors.description && <p>description is required.</p>}
            </div>

            <div>
              <input
                className="form-control"
                placeholder="image"
                {...register("image", { required: true })}
              />
              {errors.image && <p>image is required.</p>}
            </div>
            <button
              onClick={() => {
                handleSubmit(onSubmit);
              }}
            >
              Next
            </button>
            <button
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Prev
            </button>
          </>
        )}
        {step === 3 && (
          <>
            confirmation page
            <button
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                handleSubmit(onSubmit);
              }}
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
