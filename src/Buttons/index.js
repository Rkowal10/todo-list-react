import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllTasksDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button onClick={toggleHideDoneTasks} className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTasksDone}
            >
                Ukończ wszystkie
            </button>
            <button className="buttons__button"
            >
                Usuń wszystkie
            </button>
        </div>
    )
};

export default Buttons;