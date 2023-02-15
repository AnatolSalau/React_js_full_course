import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import Todo from "./components/Todos/Todo";
function App() {
  return (
    <div className="App">
        <h1>Doctor app</h1>
        <TodoForm />
        <Todo />
    </div>
  );
}

export default App;
