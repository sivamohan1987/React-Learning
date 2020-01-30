import React from "react";
import Auth from "./Auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  login() {
    Auth.login(() => {
      this.props.history.push("/landing");
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>Login Page</h2>
        <button onClick={this.login.bind(this)}>Login</button>
      </React.Fragment>
    );
  }
}
export default Login;
