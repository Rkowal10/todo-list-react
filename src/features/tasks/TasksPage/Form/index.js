import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTasks } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed === "") {
      return;
    }

    dispatch(addTasks({
      content: contentTrimmed,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
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
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;