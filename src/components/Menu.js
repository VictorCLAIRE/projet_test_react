import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styles from '../styles/Menu.module.css';
import List from "./List";
import Accueil from "./Accueil";
import Contact from "./Contact";
import ToDo from "./ToDo";

export default function Menu() {
    return (
        <Router>
            <div>
                <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
                    <ul className={"navbar-nav me-auto"}>
                        <li className={"nav-item"}>
                            <Link className={"nav-link"} to="/">Accueil</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link className={"nav-link"} to="/liste">Liste</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link  className={"nav-link"}to="/contact">Contact</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link  className={"nav-link"}to="/todo">Todo</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/todo">
                        <div className={"content"}>
                            <ToDo />
                        </div>
                    </Route>
                    <Route path="/liste">
                        <div className={"content"}>
                            <List />
                        </div>
                    </Route>
                    <Route path="/contact">
                        <div className={"content"}>
                            <Contact />
                        </div>
                    </Route>
                    <Route exact path="/">
                        <div className={"content"}>
                            <Accueil />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

