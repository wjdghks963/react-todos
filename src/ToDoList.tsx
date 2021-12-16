import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password1",
        { message: "password가 다릅니다." },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "서버가 오프라인 상태입니다." });
  };

  return (
    <div>
      <form
        style={{ display: "flex", columnFill: "auto" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일 입력이 필요합니다.",
            minLength: 10,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 메일만 입력 가능합니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "입력해야합니다",
            minLength: 3,
            validate: (value) => !value.includes("jung"),
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "입력해야합니다",
            minLength: 5,
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "입력해야합니다",
            minLength: 5,
          })}
          placeholder="User Name"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password1", {
            required: "비밀번호가 필요합니다.",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "비밀번호가 필요합니다.",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
      </form>
      <span>{errors?.extraError?.message}</span>
    </div>
  );
}

export default ToDoList;
