import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./login";
import TodoList from "./todoList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/todo" component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
