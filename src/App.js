import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/author/Author";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);