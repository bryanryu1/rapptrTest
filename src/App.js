import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./login";
import Todo from "./todo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
