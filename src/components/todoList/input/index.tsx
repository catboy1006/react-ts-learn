import React, { FC, useRef, ReactElement } from "react";
import { ITodo } from "../typeing";
interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItme = (): void => {
    const val: string = inputRef.current!.value.trim();
    console.log(val);
    if (val.length) {
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        return;
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        complete: false,
      });
    }
  };
  return (
    <div className="todoinput">
      <input type="text" ref={inputRef} placeholder="请输入代办项" />
      <button onClick={addItme}>增加</button>
    </div>
  );
};

export default TdInput;
