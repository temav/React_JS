import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const {hideModal} = this.props;
    return (<div className="modal"><p>Modal</p>
    <button onClick={hideModal}>Hide modal</button></div>);
  }
}

export default Modal;
