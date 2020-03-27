import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: []
  };
  changeInputMessage = event => {
    this.setState({messageInput: event.target.value});
  };
  
  sendMessageOnEnter = event => {
    if(event.key === 'Enter'){
    this.setState({messages: [{text: event.target.value},...this.state.messages], messageInput:''}, () => {
      console.log(this.state);
       // {a: 2}
     })
    //  this.setState({messageInput:''})
    //  console.log(this.state.messages);
     }
     
  };
  render() {
    const {messageInput, messages} = this.state;
    return (
      <div className="chat">
      
            <input className='input-message' value={messageInput} onChange={this.changeInputMessage} onKeyDown={this.sendMessageOnEnter}/>
            {
              messages.map((item, i) => <Message key={i} text={item.text}/>)
            }
        </div>);
  }
}


export default Chat;