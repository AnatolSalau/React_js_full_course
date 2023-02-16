import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import Todo from "./components/Todos/Todo";
import {useState} from "react";
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
    );
}

export default App;
