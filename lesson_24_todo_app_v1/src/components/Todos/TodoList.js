import Todo from "./Todo";

function TodoList({todoList}) {
    return (
        <>
            {
                todoList.map(
                    (todo, index) => {
                        return (
                            <Todo key={index} todo={todo} />
                        )
                    }
                )
            }
        </>
    )
}

export default TodoList;