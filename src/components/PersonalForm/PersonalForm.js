import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
    // const data = this.props;

    variab = null;


    handleChangeForm = (event) => {
        // const {onChangeProps} = this.props;
        this.props.onChangeForm(event.target.name, event.target.value);
    }

    render() {
        // const data = this.props;
        return (<div className="personal-form">
        <input name="firstName" onChange={this.handleChangeForm}/>
        <input name="lastName" onChange={this.handleChangeForm}/>
        <input name="email" onChange={this.handleChangeForm}/>
        </div>);
    }
}

export default PersonalForm;