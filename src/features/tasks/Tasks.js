import React from 'react';
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { useTasks } from '../../useTasks';

function Tasks() {
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
          <TaskList
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

export default Tasks;
