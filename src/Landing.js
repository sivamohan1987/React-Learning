import React from "react";
import Auth from "./Auth";

export default class Landing extends React.Component {
  logout() {
    Auth.logout(() => {
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>Landing Page</h2>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </React.Fragment>
    );
  }
}
