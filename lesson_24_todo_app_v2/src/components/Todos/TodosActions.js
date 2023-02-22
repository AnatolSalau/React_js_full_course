import { RiDeleteBin2Line, RiRefreshLine}
    from 'react-icons/ri';

import Button from '../UI/Button';
import style from './TodosActions.module.css'

function TodosActions({resetTodoHandler, deleteCompletedTodoHandler}) {
    return (
        <div className={style}>
            <Button
                title="Reset Todos"
                onCLick={resetTodoHandler}
            >
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onCLick={deleteCompletedTodoHandler}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;