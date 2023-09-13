import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { StyledButtons, Button } from "../Buttons/styled";

const ExampleButton = () => {
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </StyledButtons>
    )
};

export default ExampleButton;