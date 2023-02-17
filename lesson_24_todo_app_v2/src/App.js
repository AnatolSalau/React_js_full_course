import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
    //Initialize state for todo list
    const [todoList, setTodoList] = useState([]);

    //Add to todo array new element and change id
    const addTodoToListHandler = (todo) => {
        //add increment to id
        todo.id = todo.id +1;
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

    //Toggle todo field: isCompleted
    const toggleTodoHandler = (id) => {
        //!! map not change old array
        //!! map return new array
        setTodoList(todoList.map(
            () => {

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
