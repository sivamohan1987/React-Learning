import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Landing from "./Landing";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Protected Routes</h1>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/landing" component={Landing} />
        </Switch>
      </div>
    );
  }
}
export default App;
