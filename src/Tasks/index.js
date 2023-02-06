import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hideDoneTasks ? 
                " list__item--hidden" : ""}`} key={task.id}>
                <button
                    className="list__button list__button--done">
                    {task.done ? "✔️" : ""}
                </button>
                <span
                    className={`list__task${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="list__button list__button--remove"
                    >🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;