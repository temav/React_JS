import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild : 0
  };
  handleChangeChild = (event) => {
    this.setState({selectedChild: event.target.dataset.id})
  }
  render() {
    const {selectedChild} = this.state;
    const children_ = React.Children.toArray(this.props.children);
    return (<div className="switcher">
      <div className="component-list">
        {children_.map((item,index) => 
        <div className="component-list__name" key={index} 
        data-id={index} 
        onClick={this.handleChangeChild}>
        
          {item.type.displayName ? item.type.displayName:item.type.name}
        </div>)}
      </div>
      {children_[selectedChild]}
    </div>);
  }
}

export default Switcher;
