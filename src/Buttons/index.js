import { Button, FunctionButton } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllTasksDone, removeAllTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <Button>
            <FunctionButton
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
            </FunctionButton>
            <FunctionButton
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTasksDone}
            >
                Ukończ wszystkie
            </FunctionButton>
            <FunctionButton
                onClick={removeAllTasks}
            >
                Usuń wszystkie
            </FunctionButton>
        </Button>
    )
};

export default Buttons;