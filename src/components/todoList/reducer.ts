import TodoList from '.';
import { ACTION_TYPE, IAction, IState, ITodo } from './typeing';
function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_TODOLIST:
      return {
        ...state,
        todoList: payload as ITodo[]
      }
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload)
      }
    case ACTION_TYPE.TOGGLE_TOTO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id === payload ? 
          { ...todo, complete: !todo.complete} : {
            ...todo
          }
        })
      }
    default:
      return state;
  }
}
export {
  todoReducer
}