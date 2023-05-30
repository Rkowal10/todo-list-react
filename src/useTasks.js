import { useState, useEffect } from "react";

const getInitialTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");

    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks());

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const setAllTasksDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    const removeAllTasks = () => {
        setTasks(tasks => [
            ...tasks.slice(tasks.length),
        ]);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllTasksDone,
        addNewTask,
        removeAllTasks,
    };
};