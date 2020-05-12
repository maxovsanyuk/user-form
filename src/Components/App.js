import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserForm from "./views/UserForm";
import ERR404 from "./views/ERR404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/user-form" component={UserForm} />
        <Route
          render={() => {
            return <ERR404 />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
