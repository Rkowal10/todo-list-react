import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import { useTasks } from './useTasks';

function App() {
  const {
    tasks,
    hideDoneTasks,
    toggleHideDoneTasks,
    removeTask,
    toggleTaskDone,
    setAllTasksDone,
    addNewTask,
    removeAllTasks,
  } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
            setAllTasksDone={setAllTasksDone}
            removeAllTasks={removeAllTasks}
          />
        }
      />
    </>
  );
};

export default App;
