import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';


function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
          />
        }
      />
    </>
  );
};

export default App;
