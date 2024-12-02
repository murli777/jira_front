import React, { Component } from "react";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.dialog = React.createRef();
  }
  render() {
    const { children, id } = this.props;

    return (
      <>
        <dialog open className="modal" id={id} ref={this.dialog}>
          {children}
        </dialog>
      </>
    );
  }
}

export default Modal;
