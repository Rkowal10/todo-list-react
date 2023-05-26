import { useRef, useState } from "react";
import { StyledForm, Input, Button} from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        placeholder="Co masz do zrobienia?"
        autoFocus={true}
        required
      />
      <Button 
        onClick={setFocus}
      >
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;