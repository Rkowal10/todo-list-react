import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };


  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        className="form__input"
        placeholder="Co masz do zrobienia?"
        autoFocus={true}
      />
      <button className="form__button"
      >
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;