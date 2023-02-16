import style from './TodoForm.module.css'
import {useState} from "react";

function TodoForm() {

    //Initialize data in inputs by object
    const [data, setData] = useState(
        {todo: 'initial todo'}
    );

    //Handle input when press submit
    const handleInputSubmit = (event) => {
        //Stop reload page when we press submit
        event.preventDefault();
        //Logic
        console.log("Submit was pressed, data : " + data.todo)
    }

    //Handle changing in input dynamically
    const handleInputChange = (event, nameInput) => {
      setData(
          {...data, [nameInput]: event.target.value}
      )
    }

    return (
        <form className={style.todoForm} onSubmit={handleInputSubmit}>
            <input
                type="text"
                value={data.todo}
                onChange={
                    (event) => {
                        handleInputChange(event, 'todo');
                    }
                }
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;