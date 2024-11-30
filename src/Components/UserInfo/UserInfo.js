import React, { Component } from 'react'

export class UserInfo extends Component {
  render() {

    const {email, name, avatar} = this.props;

    return (
      <div className='UserInfo'>
        {name}
        {email}
      </div>
    )
  }
}

export default UserInfo