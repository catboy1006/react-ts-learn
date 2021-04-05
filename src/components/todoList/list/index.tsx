
import React, { ReactElement, FC } from 'react';
import { ITodo } from '../typeing';
import TdItem from './item';
interface IProps {
    todoList: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const List: FC<IProps> = ({
    todoList,
    removeTodo,
    toggleTodo
}): ReactElement => {
    return (
        <div className="td-list">
            {
                todoList && todoList.map((todo: ITodo) => {
                    return (
                        <TdItem
                        key={todo.id}
                            todo={todo}
                            removeTodo = {removeTodo}
                            toggleTodo = {toggleTodo}
                        />
                    )
                })

            }
        </div>
    )
}
export default List;