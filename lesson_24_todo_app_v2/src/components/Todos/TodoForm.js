import style from './TodoForm.module.css'
import {useState} from "react";

function TodoForm({addTodoHandler}) {

    //Initialize data in inputs by object
    const [data, setData] = useState(
        {
            id: 0,
            text: 'initial todo',
            isCompleted: false
        }
    );

    //Handle input when press submit
    const handleInputSubmit = (event) => {
        //Stop reload page when we press submit
        event.preventDefault();
        //Run function from App for adding todo to list
        addTodoHandler(data);
        //Delete text from input '' - after press submit
        setData({ ...data, text:''});
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
                value={data.text}
                onChange={
                    (event) => {
                        handleInputChange(event, 'text');
                    }
                }
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;