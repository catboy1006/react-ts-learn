export interface ITodo{
    id: number,
    content: string,
    complete: boolean
}

export interface IState {
    todoList: ITodo[]
}


export interface IAction {
    type: ACTION_TYPE,
    payload: ITodo | ITodo[] | number
}
export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TOTO = 'toggleTodo',
    INIT_TODOLIST = 'initTodoList'
}