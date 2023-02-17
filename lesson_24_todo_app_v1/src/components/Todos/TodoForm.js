import style from './TodoForm.module.css'
import {useState} from "react";

function TodoForm({addTodoHandler}) {

    //Initialize data in inputs by object
    const [data, setData] = useState(
        {
            id: 1,
            text: 'initial todo'
        }
    );

    //Handle input when press submit
    const handleInputSubmit = (event) => {
        //Stop reload page when we press submit
        event.preventDefault();
        //Run function from App for adding todo to list
        addTodoHandler(data);
        //Add +1 to id and delete text from input '' - after press submit
        setData({id: data.id +1, text: ''});
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