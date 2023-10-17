import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/author/Author";
import { Item, List, StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <List>
                <Item>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);