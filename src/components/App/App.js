import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import Switcher from '../Switcher';
import ModalButton from '../ModalButton';
import './App.css';


class App extends Component {
  render() {
    return (<Switcher><VideoPlayer/><ModalButton/></Switcher>);
  }
}

export default App;
