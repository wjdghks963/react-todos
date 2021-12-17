import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {};
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>To Do</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>Doing</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
