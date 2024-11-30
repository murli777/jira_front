import { Component } from "react";
import TextInput from "./Text Input/TextInput";
import Button from "./Button/Button";
import axios from "axios";



export class Login extends Component {

  constructor(props) {
    super(props);    
  }

   handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
  
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
  
    const formJson = Object.fromEntries(formData.entries());  
    
    const userDataResponse = await axios.post("http://localhost:3001/api/currentUser", formJson)
    const userData = {responseData: userDataResponse.data, username: formJson.email, token: formJson.token}
    
    this.props.callbacks.setUserData(userData)    
  }

  render() {

    return (
      <form className="Login" method="POST" onSubmit={this.handleSubmit}>
        <TextInput name="email" labelText="Email" parentClass="Login" />
        <TextInput
          type="password"
          name="token"
          labelText="Password"
          parentClass="Login"
        />
        <Button type="submit" text="Submit"/>
      </form>
    );
  }
}

export default Login;
