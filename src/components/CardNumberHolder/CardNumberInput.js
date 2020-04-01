import React, {Component} from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };
  cardChange = (event) => {
    this.props.onChangeCard(event.target.value);
  };
  format = (str_) => {
    let str = String(str_);
    return str.replace('null', '').replace(/\S\S\S\S/g, str => str+' ');
  };
  normalize = (str_) => {
    let str = String(str_);
    return str.replace(/\s/g, '');
  };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props)
      this.setState({number: this.format(this.normalize(nextProps.number))});
  };
  render() {
    // const {onChange} = this.props;
    return <input onChange={this.cardChange}/>;
  }
}

export default CardNumberInput;
