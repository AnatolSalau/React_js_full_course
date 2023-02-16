import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
    //Initialize state for todo list
    const [todoList, setTodoList] = useState([]);

    const addTodoToList = (todo) => {
        setTodoList( (oldArray) => {
                return [...oldArray, todo];
                }
        );
        console.log("todo from form : " + todo.text)
        console.log("todoList : " + todoList);
    }

    return (
        <div className="App">
            <h1>Doctor app</h1>
            <TodoForm onClick={addTodoToList} />
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default App;
