import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    // };
    handleChangeForm = (event) => {
        // const {onChangeProps} = this.props;
        let name = event.target.name;
        let value = event.target.value;
        this.props.onChangeForm(name, value);
    }

    render() {
        // const data = this.props;
        return (<div className="personal-form">
        <input name="firstName" onChange={this.handleChangeForm} value={this.props.firstName} placeholder="First name"/>
        <input name="lastName" onChange={this.handleChangeForm} value={this.props.lastName} placeholder="Last name"/>
        <input name="email" onChange={this.handleChangeForm} value={this.props.email} placeholder="E-mail"/>
        </div>);
    }
}

export default PersonalForm;