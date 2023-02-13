import './App.css';
import {useEffect, useState} from "react";

function App() {
  console.log('App render')
  const [todo, setTodo] =  useState(null);

  const [click, setClick] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setTodo(json);
          console.log('Fetch is called')
        });
    }, [click]
  );
  console.log(todo)

  return (
    <div className="App">
        {todo && (
          <h1>
              {todo.title}
          </h1>
        )}
        <button onClick= {() => setClick(prevState =>
            prevState + 1
        )}>
            Get request from server
        </button>
    </div>
  );
}

export default App;
