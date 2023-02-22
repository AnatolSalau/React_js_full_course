import {useState} from "react";

import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
    //Initialize state for todo list
    //todoList - list where we handle all todo objects
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

    //Toggle todo field: isCompleted by .map
    const toggleTodoInListHandler = (id) => {
        //!! map not change old array
        //!! map return new array
        //toggle is completed
        setTodoList(todoList.map(
            (todo) => {
                return (
                    todo.id === id
                        ? {...todo, isCompleted: !todo.isCompleted}
                        : {...todo}
                )
            }
        ));
    }

    //Clear todoList
    const resetTodosHandler = () => {
        setTodoList([]);
    }

    //Delete only completed todos
    const deleteCompletedTodosHandler = () => {
      setTodoList(todoList.filter(
          (todo) => {
              return(
                  !todo.isCompleted
              )
          }
      ));
    }

    return (
        <div className="App">
            <h1>Doctor app</h1>
            <TodoForm addTodoHandler={addTodoToListHandler} />
            <TodosActions
                resetTodoHandler={resetTodosHandler}
                deleteCompletedTodoHandler={deleteCompletedTodosHandler}
            />
            <TodoList
                todoList={todoList}
                deleteTodoHandler={deleteTodoFromListHandler}
                toggleTodoHandler={toggleTodoInListHandler}
            />
        </div>
    );
}

export default App;
