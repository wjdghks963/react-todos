import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector  } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // filter된 값인 selector를 가져오고 category는 input에 따라 값이 달라진다.
  const toDos = useRecoilValue(toDoSelector);
  const [category,setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) =>{
    setCategory(event.currentTarget.value as any)
  }

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        </select>
      <CreateToDo />
      {toDos.map((toDo)=>(<ToDo key={toDo.id} {...toDo}/>))}
    </div>
  );
}

export default ToDoList;
