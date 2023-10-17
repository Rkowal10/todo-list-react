import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDoneTasks = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔️" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;