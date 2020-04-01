import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: '' 
  };
  handleChange = (value) => {this.setState({cardNumber: value})};
  render() {
    const {cardNumber} = this.state;
    return (
      <CardNumberInput number={cardNumber} onChangeCard={this.handleChange}/>
    );
  }
}

export default CardNumberHolder;
