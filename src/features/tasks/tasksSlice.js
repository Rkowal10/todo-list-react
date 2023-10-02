import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTasks: (state, { payload: task }) => {
            state.tasks.push(task);
        },
        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks.splice(index, 1);
        },
        setAllTaskDone: state => {
            state.tasks.forEach(task => task.done = true);
        },
        removeAllTasks: state => {
            const tasksLenght = state.tasks.length;
            state.tasks.splice(0, tasksLenght + 1);
        },
        fetchExampleTasks: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },
        fetchExampleTasksError: state => {
            state.loading = false;
        },
    },
});

export const {
    addTasks,
    toggleHideDoneTasks,
    toggleTaskDone,
    removeTask,
    setAllTaskDone,
    removeAllTasks,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDoneTasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoadingTasks = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    
    if(!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => 
        content.toUpperCase().includes(query.trim().toUpperCase()));
}
    

export default tasksSlice.reducer;