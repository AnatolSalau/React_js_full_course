import './App.css';
import {useEffect, useState} from "react";

function App() {
  console.log('App render')
  const [todo, setTodo] =  useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setTodo(json);
        });
    }, []
  );
  console.log(todo)

  return (
    <div className="App">

    </div>
  );
}

export default App;
