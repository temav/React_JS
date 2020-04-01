import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import Switcher from '../Switcher';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import './App.css';


class App extends Component {
  render() {
    // return <ModalButton/>; 
    return (<Switcher><VideoPlayer/><CardNumberHolder/><ModalButton/></Switcher>);
  }
}

export default App;
