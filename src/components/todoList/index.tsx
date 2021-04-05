import React, { FC, ReactElement, useCallback, useEffect, useState, useReducer } from 'react';
import TdInput from './input';
import TdList from './list/index';
import { todoReducer } from './reducer';
import { ACTION_TYPE, IState, ITodo } from './typeing';

// const initialState: IState = {
//     todoList: []
// }

function init(initTodoList: ITodo[]): IState {
    return {
        todoList: initTodoList
    }

}
const TodoList: FC = (): ReactElement => {
    
    // const [todoList, setTodoList] = useState<ITodo[]>([])
    
    const [state, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        console.log(localStorage.getItem('todolist'))
        const todoList = JSON.parse(localStorage.getItem('todolist') || '[]')
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
        
    }, []);

    useEffect(() => {
        console.log(state.todoList)
        localStorage.setItem('todolist', JSON.stringify(state.todoList))
    }, [state.todoList])

    const addTodo = useCallback((todo: ITodo): void => {
        // setTodoList(todoList => [...todoList, todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, []);
    const removeTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, [])
    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TOTO,
            payload: id
        })
    }, [])
    return (
        <div className="todolist">
            <TdInput
                addTodo = {addTodo}
                todoList = {state.todoList}
            />
            <TdList
                todoList = {state.todoList}
                removeTodo = {
                    removeTodo
                }
                toggleTodo = {
                    toggleTodo
                }
            />
        </div>
    )
}
export default TodoList;