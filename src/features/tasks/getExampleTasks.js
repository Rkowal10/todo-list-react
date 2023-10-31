const requestUrl = fetch("/todo-list-react/exampleTasks.json");

export const getExampleTasks = async () => {
    const response = await requestUrl;
    
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};