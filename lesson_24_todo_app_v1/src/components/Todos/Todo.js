import { RiTodoFill } from 'react-icons/ri'
import style from './Todo.module.css'

function Todo({todo, deleteTodo}) {
    return (
        <div
            className={style.todo}
            onDoubleClick={() => deleteTodo(todo.id)}
        >
            {`ID : ${todo.id}, text : ${todo.text}`}
        </div>
    )
}

export default Todo;