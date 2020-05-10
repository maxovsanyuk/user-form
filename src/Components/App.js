import React from "react";
import UsersTable from "./UsersTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ERR404 from "./ERR404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/LeeLoo" component={UsersTable} />
        <Route exact path="LeeLoo/page/:page" component={UsersTable} />
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
