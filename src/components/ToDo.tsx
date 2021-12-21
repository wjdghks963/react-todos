import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories,IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      // 선택한 타켓과 toDo의 id가 같은지 확인
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo: IToDo = { text, id, category: name as any };
      const newToDos = [...oldToDos];
      newToDos.splice(targetIndex, 1, newToDo);
      return newToDos;
    });
  };
  const handleDeleteToDo = ()=>{
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      let final =  [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
       const local = localStorage.setItem("ToDos", final as any)
       const parsedToDos = JSON.parse(local as any)
       return final
    });
  }

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
        <button onClick={handleDeleteToDo}>❌</button>
    </li>
  );
}

export default ToDo;
