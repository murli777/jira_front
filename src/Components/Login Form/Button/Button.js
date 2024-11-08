import { Component } from "react";

export class Button extends Component {
  render() {
    const { type, text } = this.props;
    return (
      <>
        <button type={type}>{text}</button>
      </>
    );
  }
}

export default Button;
