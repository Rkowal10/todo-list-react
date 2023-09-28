import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
    toggleHideDoneTasks,
    setAllTaskDone,
    removeAllTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDoneTasks = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDoneTasks())}
                    >
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllTaskDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                    <Button
                        onClick={() => dispatch(removeAllTasks())}
                    >
                        Usuń wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;