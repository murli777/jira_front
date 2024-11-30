import React, { Component } from "react";

import Login from "../Components/Login Form/Login";
import Modal from "../Components/Modal/Modal";
import UserInfo from "../Components/UserInfo/UserInfo";
import IncidentInfo from "../Components/IncidentInfo/IncidentInfo";

export class Jira extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      token: "",
      userInfo: null,
      incidentData: [],
    };
  }

  setUserData = (data) => {
    this.setState({ userInfo: data.responseData });
    this.setState({ username: data.username });
    this.setState({ token: data.token });
  };

  setIncidentData = (data) => {
    this.setState({ incidentData: data });
  };

  render() {
    return (
      <div>
        {(
          <Modal
            children={
              <Login
                callbacks={{
                  setUserData: this.setUserData,
                  setIncidentData: this.setIncidentData,
                }}
              />
            }
          />
        ) || (
          <div>
            <UserInfo props={{ ...this.userInfo }} />
            <IncidentInfo />
          </div>
        )}
      </div>
    );
  }
}

export default Jira;
