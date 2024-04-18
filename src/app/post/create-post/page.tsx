"use client";
import CreatePost from "@/app/components/CreatePost";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreatePostPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue
  }: any = useForm({
    mode: "onTouched",

  });
  const [step, setStep] = useState(1);

//   const onSubmit: any = (data: any) => {
//     if (step === 1) {
//       setStep(2);
//     } else if (step == 2) {
//       setStep(3);
//     } else {
//     }
//     console.log(data, "data");
//   };
  return (
    <div>
      <CreatePost/>
    </div>
  );
};

export default CreatePostPage;
