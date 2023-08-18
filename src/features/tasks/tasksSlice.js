import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;