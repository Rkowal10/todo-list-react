import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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