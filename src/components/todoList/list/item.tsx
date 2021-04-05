import React, { FC, ReactElement } from 'react';
import { ITodo } from '../typeing';
interface IProps {
    todo: ITodo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}
const TdItem: FC<IProps> = ({
    todo,
    toggleTodo,
    removeTodo
}): ReactElement => {
    const { id, content, complete} = todo;
    return (
        <div className="todo-item">

            <input 
                type="checkbox"
                checked={complete}
                onChange = { () => toggleTodo(id)} />
       
        <span style={ {textDecoration: complete ? 'line-through' : 'none'}}>{ content }</span>
        <button onClick={() => removeTodo(id)}>remove</button>
        </div>
    )
}

export default TdItem;
