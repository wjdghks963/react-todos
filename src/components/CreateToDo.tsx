import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import React from "react";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState)
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    // toDo안에 있는 data를 setToDos를 이용해 object를 설정해 넣는다.
    setToDos((oldToDos) => { 
       const allTodos= [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ];
    localStorage.setItem("ToDos", JSON.stringify(allTodos) as any);
    return allTodos;
  }
  );
    setValue("toDo", ""); // toDo입력칸을 빈칸으로
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "할 일을 적어주세요" })}
        placeholder="To Do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
