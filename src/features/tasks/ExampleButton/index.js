import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoadingTasks } from "../tasksSlice";
import { StyledButtons, Button } from "../Buttons/styled";

const ExampleButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoadingTasks);

    return (
        <StyledButtons>
            <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
                {loading ? "Ładowanie... " : "Pobierz przykładowe zadania"}
            </Button>
        </StyledButtons>
    )
};

export default ExampleButton;