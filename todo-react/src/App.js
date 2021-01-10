import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import TodoList from "./components/todoList";
import EditTodo from "./components/editTodo";
import CreateTodo from "./components/createTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>

          </li>
          <li className="navbar-item">
            <Link to="/a" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/:id" component={EditTodo} />
        <Route exact path="/a" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
