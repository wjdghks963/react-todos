import React from "react";

function ToDoList() {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
  };
  return (
    <div>
      <form>
        <input placeholder="to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
