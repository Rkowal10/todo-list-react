import React from 'react';
import Form from '../TasksPage/Form';
import TaskList from '../TasksPage/TaskList';
import Buttons from '../TasksPage/Buttons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import ExampleButton from '../TasksPage/ExampleButton';
import Search from './Search';

function TasksPage() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleButton />}
      />
      <Section
        title="Wyszukiwarka zadań"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
};

export default TasksPage;
