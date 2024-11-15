import React, { Component } from "react";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.dialog = React.createRef();
  }
  render() {
    const { children, id, isOpen } = this.props;

    if(isOpen) {
      this.dialog.showModal()
    }

    return (
      <>
        <dialog className="modal" id={id} ref={this.dialog} callback={callback}>
          {children}
        </dialog>
      </>
    );
  }
}

export default Modal;
