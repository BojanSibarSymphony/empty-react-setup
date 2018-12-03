import React from "react";
import LoginFrom from "../forms/LoginForm";

class LoginPage extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>LoginPage</h1>
        <LoginFrom submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
