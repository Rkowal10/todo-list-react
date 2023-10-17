import React from 'react';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 🙁"}
                body={!!task && (
                    <>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </>
    );
};

export default TaskPage;
