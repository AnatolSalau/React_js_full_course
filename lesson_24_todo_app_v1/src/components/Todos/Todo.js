import style from './Todo.module.css'
function Todo({todo}) {
    return (
        <div className={style.todo}>
            {`ID : ${todo.id}, text : ${todo.text}`}
        </div>
    )
}

export default Todo;