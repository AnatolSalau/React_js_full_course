//Icons library
import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import style from './Todo.module.css'

function Todo({todo, deleteTodoHandler, toggleTodoHandler}) {

    const changeCssClass = () => {
        return `${style.todo} ${
            todo.isCompleted
                ? style.completedTodo
                : ''
        }`
    }

    //Run function for deleting todo from list by event:Drag the function below
    //Change connected css module by ternary operator
    return (
        <div className={changeCssClass()}>
            <RiTodoFill className={style.todoIcon}/>
            <div className={style.todoText}>
                {`ID : ${todo.id}, text : ${todo.text}`}
            </div>
            <RiDeleteBin2Line
                className={style.deleteIcon}
                onClick={() => deleteTodoHandler(todo.id)}
            />
            <FaCheck
                className={style.checkIcon}
                onClick={() => toggleTodoHandler(todo.id)}
            />
        </div>
    )
}

export default Todo;