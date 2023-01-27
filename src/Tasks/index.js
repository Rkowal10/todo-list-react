import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`} key={task.id}>
                <button className="list__button list__button--done">
                    {task.done ? "✔️" : ""}
                </button>
                <span className={`list__task${task.done ? " list__task--done" : ""}`}>
                {task.content}
                </span> 
                <button className="list__button list__button--remove">🗑️</button>
            </li>
))}
    </ul >
);

export default Tasks;