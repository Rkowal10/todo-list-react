import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed === "") {
      return;
    }
    
    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  const setFocus = () => {
    inputRef.current.focus();
  };


  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        className="form__input"
        placeholder="Co masz do zrobienia?"
        autoFocus={true}
        required
      />
      <button 
        onClick={setFocus} 
        className="form__button"
      >
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;