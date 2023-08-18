import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllTasksDone, removeAllTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <Button
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTasksDone}
            >
                Ukończ wszystkie
            </Button>
            <Button
                onClick={removeAllTasks}
            >
                Usuń wszystkie
            </Button>
        </StyledButtons>
    )
};

export default Buttons;