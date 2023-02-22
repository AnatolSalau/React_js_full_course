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
                onCLick={resetTodoHandler}
            >
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onCLick={deleteCompletedTodoHandler}
                isDisable={completedTodoExist !== true}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;