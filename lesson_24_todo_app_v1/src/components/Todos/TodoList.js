import Todo from "./Todo";
import style from './TodoList.module.css'

function TodoList({todoList}) {
    return (
        <div className={style.todoList}>
            {
                todoList.map(
                    (todo, index) => {
                        return (
                            <Todo key={index} todo={todo} />
                        )
                    }
                )
            }
        </div>
    )
}

export default TodoList;