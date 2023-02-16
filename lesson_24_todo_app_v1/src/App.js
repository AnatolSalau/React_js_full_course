import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
    //Initialize state for todo list
    const [todoList, setTodoList] = useState([]);

    const addTodoToList = (todo) => {
        setTodoList([...todoList, todo]);
    }

    const deleteTodoFromList = (id) => {
        setTodoList(todoList.filter(
            (todo) => {
                return todo.id !== id;
            }
        ));
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
