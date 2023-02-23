import { RiDeleteBin2Line, RiRefreshLine}
    from 'react-icons/ri';

import Button from '../UI/Button';
import style from './TodosActions.module.css'

function TodosActions({
                          resetTodoHandler,
                          deleteCompletedTodoHandler,
                          completedTodoExist
}) {
    return (
        <div className={style}>
            <Button
                title="Reset Todos"
                onClick={resetTodoHandler}
            >
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteCompletedTodoHandler}
                disabled={completedTodoExist !== true}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;