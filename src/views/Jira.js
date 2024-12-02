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
      isModalOpen: true,
    };
  }

  setUserData = (data) => {
    this.setState({
      userInfo: data.responseData,
      username: data.username,
      token: data.token,
      isModalOpen: false,
    });
  };

  setIncidentData = (data) => {
    this.setState({ incidentData: data });
  };

  render() {
    return (
      <div>
        {(this.state.isModalOpen && (
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
        )) || (
          <div>
            <UserInfo props={this.state.userInfo} />
            {/* <IncidentInfo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default Jira;
