import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
    handleChangeForm = (event) => {
        this.props.onChangeForm(event.target.name, event.target.value);
    };
    componentWillUnmount = () => {};
    render() {
        return (
            <div className="card-form">
            <input name="cardNumber" onChange={this.handleChangeForm} value={this.props.cardNumber} placeholder="0000000000000000"/>
            </div>);
    };
};

export default CardForm;