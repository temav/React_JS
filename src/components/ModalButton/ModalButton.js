import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };
  hideModal = () => {
    this.setState({isModalShow: false}, ()=>{});
  };
  showModal = () => {
    this.setState({isModalShow: true}, ()=>{});
  };
  render() {
    const {isModalShow} = this.state;
    return (
    <div>
      <button onClick={this.showModal}>Show modal</button> 
      {isModalShow ? ReactDOM.createPortal(<Modal hideModal={this.hideModal}/>, 
        document.getElementById('modal')) : undefined}
    </div>);
  }
}

export default ModalButton;
