//Icons library
import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import style from './Todo.module.css'

function Todo({todo, deleteTodoHandler}) {
    //Run function for deleting todo from list by event:Drag the function below
    return (
        <div
            className={style.todo}
            onDoubleClick={() => deleteTodoHandler(todo.id)}
        >
            <RiTodoFill className={style.todoIcon}/>
            {`ID : ${todo.id}, text : ${todo.text}`}
            <RiDeleteBin2Line />
            <FaCheck />
        </div>
    )
}

export default Todo;