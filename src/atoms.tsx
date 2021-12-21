import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO"="TO_DO",
  "DOING"="DOING",
  "DONE"="DONE"
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

const localStorageToDos = localStorage.getItem("ToDos");
const parsedToDos = JSON.parse(localStorageToDos as any);
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsedToDos === null ? [] : parsedToDos.length > 0 ? parsedToDos : [],
});

export const categoryState = atom<Categories>({
  key:"category",
  default:Categories.TO_DO
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState)
    // toDo의 카테고리와 category가 같은 값들을 filter한다.
    return  toDos.filter((toDo) => toDo.category === category);
  },
});
