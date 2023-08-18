import React from 'react';
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { useTasks } from '../../useTasks';
import { selectTasks } from './tasksSlice';
import { useSelector } from 'react-redux';

function Tasks() {

  const { tasks } = useSelector(selectTasks);

  const {
    //tasks,
    //hideDoneTasks,
    //toggleHideDoneTasks,
    removeTask,
    //toggleTaskDone,
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
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllTasksDone={setAllTasksDone}
            removeAllTasks={removeAllTasks}
          />
        }
      />
    </>
  );
};

export default Tasks;
