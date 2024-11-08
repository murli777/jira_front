import { Component } from "react";
import TextInput from "./Text Input/TextInput";
import Button from "./Button/Button";
import axios from "axios";

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());

  console.log(formJson);

  axios.post("http://localhost:3001/api/formSubmitTest", formJson).then(() => {
    console.log("Data sent");
  });
}

export class Login extends Component {
  render() {
    return (
      <form className="Login" method="POST" onSubmit={handleSubmit}>
        <TextInput name="email" labelText="Email" parentClass="Login" />
        <TextInput
          type="password"
          name="password"
          labelText="Password"
          parentClass="Login"
        />
        <Button />
      </form>
    );
  }
}

export default Login;
