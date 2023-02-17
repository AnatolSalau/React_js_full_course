import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
    //Initialize state for todo list
    const [todoList, setTodoList] = useState([]);

    //Add to todo array new element
    const addTodoToListHandler = (todo) => {
        setTodoList([...todoList, todo]);
    }

    //Delete object with field id from array by filter
    const deleteTodoFromListHandler = (id) => {
        setTodoList(todoList.filter(
            (todo) => {
                return todo.id !== id;
            }
        ));
    }
    return (
        <div className="App">
            <h1>Doctor app</h1>
            <TodoForm addTodoHandler={addTodoToListHandler} />
            <TodoList
                todoList={todoList}
                deleteTodoHandler={deleteTodoFromListHandler}
            />
        </div>
    );
}

export default App;
