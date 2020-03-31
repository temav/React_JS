import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  handleButton = (resp) => {
    resp === 'play' ? this.player.play() : this.player.pause(); 
  };
  render() {
    return (<div className="video-player"> 
    <video ref={c => this.player = c}>
      <source className="video-player_source" src={videoFile} />
    </video>
    <div className="control_panel">
    <button onClick={() => this.handleButton('play')}>Play</button>
    <button onClick={() => this.handleButton('pause')}>Pause</button>
    </div>
    </div>);
  }
}

export default VideoPlayer;
