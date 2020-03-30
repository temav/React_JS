import React, { Component } from 'react';
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
    const {isModalShow} = this.state.isModalShow;
    return ({isModalShow} ? <Modal/> : {undefined});
  }
}

export default ModalButton;
