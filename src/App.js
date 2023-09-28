import { Link, Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
                <li>
                    <Link to="/autor">O autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/autor">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);