import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName
// const Titles = () => {}

class Switcher extends Component {
  state = {
    selectedChild : 0
  };
  handleSelectItem = () => {};
  render() {
    const children_ = React.Children.toArray(this.props.children);
    // const titles = [];
  
    // for (let t of children) {
      // t.type.displayName ? titles.push(t.type.displayName) : titles.push(t.type.name);
    // }
    return (<div className="switcher">
      <div className="component-list">
        {children_.map((item,index) => {<h1 key={index} data-id={index}>{item.type.name}</h1>})}
      </div>
    </div>);
    
    return null;
  }
}

export default Switcher;
