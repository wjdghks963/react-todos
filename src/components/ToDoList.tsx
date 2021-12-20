import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // atoms에 있는 toDoState<IToDo[]>를 이용한다.
  const toDos = useRecoilValue(toDoSelector);
  const [category,setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) =>{
    setCategory(event.currentTarget.value)
  }

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={"TO_DO"}>To Do</option>
        <option value={"DOING"}>Doing</option>
        <option value={"DONE"}>Done</option>
        </select>
      <CreateToDo />
      {toDos.map((toDo)=>(<ToDo key={toDo.id} {...toDo}/>))}
    </div>
  );
}

export default ToDoList;
