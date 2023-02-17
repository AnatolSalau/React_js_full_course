import Todo from "./Todo";
import style from './TodoList.module.css'

function TodoList({todoList, deleteTodoHandler}) {
    //Drag the function below to Todo component
    return (
        <div className={style.todoList}>
            {
                todoList.length > 0
                ? (todoList.map(
                    (todo, index) => {
                        return (
                            <Todo
                                key={index}
                                todo={todo}
                                deleteTodoHandler={deleteTodoHandler}
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