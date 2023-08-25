import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, toggleHideDoneTasks, setAllTaskDone, removeAllTasks } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <Button
                onClick={() => dispatch(toggleHideDoneTasks())}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllTaskDone())}
            >
                Ukończ wszystkie
            </Button>
            <Button
                onClick={() => dispatch(removeAllTasks())}
            >
                Usuń wszystkie
            </Button>
        </StyledButtons>
    )
};

export default Buttons;