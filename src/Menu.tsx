import React, { useState } from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ToDo } from "./App";
import { Header } from "./Header";
import { Home } from "./Home";
import { List } from "./List";
import { Add } from "./Add";



export const Menu = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    return (
        <Router>
            <div>
                <Header />

                <div className="bar">
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                        <li>
                            <Link to="/add">Add</Link>
                        </li>
                    </ul>
                </div>



                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/list">
                        <List todos={todos} setTodos={setTodos} />
                    </Route>
                    <Route path="/add">
                        <Add todos={todos} setTodos={setTodos} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

