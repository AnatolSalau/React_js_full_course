import Todo from "./Todo";
import style from './TodoList.module.css'

function TodoList({todoList, deleteTodoHandler, toggleTodoHandler}) {
    //Drag the function below to Todo component
    return (
        <div className={style.todoList}>
            {
                todoList.length > 0
                ? (todoList.map(
                    (todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                deleteTodoHandler={deleteTodoHandler}
                                toggleTodoHandler={toggleTodoHandler}
                            />
                        )
                    })
                )
                : <h1>Doctor tasks is empty</h1>
            }
        </div>
    )
}

export default TodoList;