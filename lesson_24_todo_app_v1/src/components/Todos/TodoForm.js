import style from './TodoForm.module.css'
import {useState} from "react";

function TodoForm({onClick}) {

    //Initialize data in inputs by object
    const [data, setData] = useState(
        {
            id: 0,
            text: 'initial todo'
        }
    );

    //Handle input when press submit
    const handleInputSubmit = (event) => {
        //Stop reload page when we press submit
        event.preventDefault();
        //Logic
        console.log("Submit was pressed, data : " + data.text)
        onClick(data);
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
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default TodoForm;